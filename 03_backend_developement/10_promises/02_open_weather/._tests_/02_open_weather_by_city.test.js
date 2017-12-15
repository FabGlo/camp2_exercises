require("sepia");
const weatherByCity = require ("../02_open_weather_by_city");

test ("Reception of the temperature for a City",()=>{
  expect.assertions(1);
  return weatherByCity("Rennes")
    .then((result) => {
      return expect(result).toBe(7.56)
    })
    .catch((error) => {
      return expect(error).toBe("error")
    })
});
