const fetch = require("node-fetch");


function weatherByCity(city){
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.OPEN_WEATHER_KEY}&units=metric`,
    {method: "GET"}
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.main.temp);
      return result.main.temp;
    })
    .catch((error) => {console.warn(error);
    }
    );
}

module.exports=weatherByCity;
