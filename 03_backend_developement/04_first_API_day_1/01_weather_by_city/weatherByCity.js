const request = require ("request");

const API_WEATHER_KEY = process.env.OPEN_WEATHER_KEY;

function weatherByCity(city){
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_WEATHER_KEY}&units=metric`,
      method: "GET"
    },
    function(error, response, result){
      return`${JSON.parse(result).main.temp} °C`;
    });
}

module.exports = weatherByCity;
