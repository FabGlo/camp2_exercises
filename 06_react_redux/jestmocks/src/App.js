import React, { Component } from 'react';
import './App.css';
const fetch = require ("node-fetch");
const API_KEY= process.env.REACT_APP_OPEN_WEATHER_KEY;


function loadTemperature(fetch){
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=rennes,fr&APPID=${API_KEY}&units=metric`,
    {method: "GET"}
  )
    .then(res => res.json())
    .then(res => res.main.temp)
  }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      temp:0,
    }
  }
  componentDidMount(){
    loadTemperature(fetch)
    .then((res) => {
      this.setState({
        temp: res,
      });
    },
    (error)=>{
      this.setState({
        error
      })
    })
  }
  render() {
    return (
      <div className="App">
        <p>temperature actually on Rennes is {this.state.temp}</p>
      </div>
    );
  }
}

export default App;
export {loadTemperature}
