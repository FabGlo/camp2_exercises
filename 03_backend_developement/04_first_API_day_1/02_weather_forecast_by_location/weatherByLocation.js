const request = require ("request");

const API_WEATHER_KEY = process.env.OPEN_WEATHER_KEY;

function weatherByLatitudeAndLongitude (lat , long){
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_WEATHER_KEY}&lat=${lat}&lon=${long}&units=metric&cnt=40`,
      method: "GET"
    },
    function(error, response, result){
      const json = JSON.parse(result).list;
      const newarray = json.map(renderObject);
      console.log(newarray);
    }
  );
}

function weatherByZipcode(city , zip){
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_WEATHER_KEY}&q=${city}&units=metric&zip=${zip}&cnt=40`,
      method: "GET"
    },
    function(error, response, result){
      const json = JSON.parse(result).list;
      const newArray = json.map(renderObject);
      console.log(newArray);
    }
  );
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


weatherByZipcode("Rennes,fr","35000,fr");

weatherByLatitudeAndLongitude(48.242469,-1.562212000000045);

module.exports={
  weatherByZipcode : weatherByZipcode,
  weatherByLatitudeAndLongitude : weatherByLatitudeAndLongitude
};
