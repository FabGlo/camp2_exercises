import React, { Component } from 'react';
import './App.css';
const fetch = require ("node-fetch");
const API_KEY= process.env.REACT_APP_OPEN_WEATHER_KEY;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      temp:0,
    }
  }
  componentDidMount(){
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=rennes,fr&APPID=${API_KEY}&units=metric`,
    {method: "GET"}
  )
    .then(res => res.json())
    .then((res) => {
      this.setState({
        temp: res.main.temp,
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
