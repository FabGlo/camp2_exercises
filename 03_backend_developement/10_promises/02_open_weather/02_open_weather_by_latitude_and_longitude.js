const fetch = require("node-fetch");

function weatherByLatitudeAndLongitude (lat , long){
  return fetch(
    `http://api.openweathermap.org/data/2.5/forecast?APPID=${process.env.OPEN_WEATHER_KEY}&lat=${lat}&lon=${long}&units=metric&cnt=40`,
    {method: "GET"}
  )
    .then(response => response.json())
    .then(result => {
      const newArray = result.list.map(renderObject);
      return newArray;
    });
}



function renderObject(day){
  const objectDay={
    date : `${new Date (day.dt*1000).getDate()}/${new Date (day.dt*1000).getMonth()+1}/${new Date (day.dt*1000).getFullYear()}`,
    temperature: day.main.temp,
    weather:{
      id : day.weather[0].id,
      main : day.weather[0].main,
      description : day.weather[0].description
    }
  };
  return objectDay;
}

module.exports = weatherByLatitudeAndLongitude;
