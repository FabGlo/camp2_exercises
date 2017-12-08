//appel des library
const oauth = require("OAuth");
const request = require("request");


// appel des variables
const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET;
const TWITTER_REQUEST_URL = process.env.TWITTER_REQUEST_URL;
const TWITTER_ACCESS_URL = process.env.TWITTER_ACCESS_URL;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const TWITTER_ACCESS_SECRET = process.env.TWITTER_ACCESS_SECRET;
const WATSON_KEY = process.env.WATSON_KEY;
const WATSON_URL = process.env.WATSON_URL;
const WATSON_USERNAME = process.env.WATSON_USERNAME;


// appel API TWITTER
const OAuth = new oauth.OAuth(TWITTER_REQUEST_URL, TWITTER_ACCESS_URL, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, "1.0A", null, "HMAC-SHA1");

const url_TWITTER = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";




function tweetsByName (Name,callback){
  return OAuth.get(url_TWITTER + Name, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET, function (error, data) {
    if (error) {
      console.warn(error);
    }
    else {
      JSON.parse(data).map(tweet =>
        callback(tweet.text,renderWatson)
      );
    }
  });
}


// appel API WATSON
function answerWatson(text,callback){
  const auth_watson = "Basic " + new Buffer(WATSON_USERNAME + ":" + WATSON_KEY).toString("base64");
  const uri = encodeURI(WATSON_URL + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);
  request({ url: uri, headers: { "Authorization": auth_watson } }, function (error, response, body) {
    if (error) {
      console.warn(error);
    }
    else {
      console.log(text);
      const emotionParsed = JSON.parse(body).emotion.document.emotion;
      callback(emotionParsed);
    }
  });
}

function renderWatson(parsed){
  const emotionText = {
    sadness : (parsed.sadness * 100).toFixed(2) + " %",
    joy : (parsed.joy * 100).toFixed(2) + " %",
    fear : (parsed.fear * 100).toFixed(2) + " %",
    disgust : (parsed.disgust * 100).toFixed(2) + " %",
    anger : (parsed.anger * 100).toFixed(2) + " %"
  };
  console.log(emotionText);
}


function answerWatsonByTwitterName(name){
  tweetsByName(name, answerWatson);
}

answerWatsonByTwitterName("staderennais");

module.exports={
  renderWatson : renderWatson,
  answerWatson : answerWatson,
  tweetsByName : tweetsByName
};
