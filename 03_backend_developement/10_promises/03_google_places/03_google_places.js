const fetch = require("node-fetch");
const weather = require("../02_open_weather/02_open_weather_by_latitude_and_longitude");

function weatherAtPlaces(places){
  return fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${places}&key=${process.env.KEY_GOOGLE_PLACES}`,
    {method:"GET"}
  )
    .then(result => result.json())
    .then((resultParsed)=>{
      const lat = resultParsed.results[0].geometry.location.lat;
      const lng = resultParsed.results[0].geometry.location.lng;
      return {lat,lng};
    })
    .then ((location) =>{
      return weather(location.lat,location.lng);
    }
    );
}


module.exports= weatherAtPlaces;
