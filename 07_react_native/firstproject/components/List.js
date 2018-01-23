import React from "react";
import {Text , ActivityIndicator, ListView} from "react-native";
import style from "../style.js";
import Row from "./Row.js";


export default class list extends React.Component{
  constructor(props){
    super(props),
    this.state={
      city: this.props.navigation.state.params.city,
      report:null
    }
    this.loadTemperature()
  }

  static navigationOptions= ({navigation}) => {
    return{
      title:`Weather in ${navigation.state.params.city}`
    }
  }

  loadTemperature(){
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=dff81f40b392a92f844d3bf2b35a4d4b&units=metric`,
      {method: "GET"}
    )
        .then(res => res.json())
        .then(res => this.setState({report: res}))
    }

  render(){
    if (this.state.report === null){
      return(
        <ActivityIndicator color={style.color} size="large"/>
      )
    }else{
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return(
        <ListView
        dataSource={ds.cloneWithRows(this.state.report.list)}
//        renderRow={(row) => <Text>{row.main.temp}</Text>}
          renderRow={(row, j) => <Row time={row} index={parseInt(j,10)}/>}
        />
    )}
  }
}
