const request = require("request");

function simpleGet(func){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function (error, response, result) {
      func(result);
    }
  );
}

function func(result){
  return result;
}

simpleGet(func);



function simpleGetWithParams(func2){
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function (error, response, result) {
      const resultJSON = JSON.parse(result);
      return func2(resultJSON.args);
    }
  );
}

function func2(resultParse){
  return resultParse;
}

simpleGetWithParams(func2);


const today = new Date().toISOString().substring(0, 10);

function validateTimestamp(func3){
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${today}`,
      method: "GET"
    },
    function(error, response, result){
      return func3(result);
    }
  );
}

function func3(result){
  return result;
}

validateTimestamp(func3);


module.exports={
  simpleGet : simpleGet,
  simpleGetWithParams : simpleGetWithParams,
  validateTimestamp : validateTimestamp
};
