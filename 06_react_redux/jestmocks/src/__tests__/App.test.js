import React from 'react';
import ReactDOM from 'react-dom';
import App, {loadTemperature} from '.././App';
const API_KEY= process.env.REACT_APP_OPEN_WEATHER_KEY;


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

const fakeFetch = jest.fn()
  .mockImplementation(() =>
    Promise.resolve({
      json: function() {
        return Promise.resolve({temp:5});
      }
    })
  );

test("loadTemperature: it gives us a temperature", () => {
  const expectedResult = {temp:5};
  return loadTemperature(fakeFetch)
    .then(temperature => {
      expect(temperature).toEqual(expectedResult);
      expect(fakeFetch).toHaveBeenCalled();
      expect(fakeFetch).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/weather?q=rennes,fr&APPID=${API_KEY}&units=metric`);
    });
});
