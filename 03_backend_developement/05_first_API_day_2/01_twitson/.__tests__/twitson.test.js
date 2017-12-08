const twitson = require("../twitson");

const emotionTest ={
  sadness: 0.158055,
  joy: 0.094304,
  fear: 0.120643,
  disgust: 0.208276,
  anger: 0.482708
};

test("test if the emotions are in % and with 2 decimales",()=>{
  expect(twitson.renderWatson(emotionTest)).toEqual({
    sadness: "15.81 %" ,
    joy: "9.43 %" ,
    fear: "12.06 %" ,
    disgust: "20.83 %" ,
    anger: "48.27 %"
  })
});
