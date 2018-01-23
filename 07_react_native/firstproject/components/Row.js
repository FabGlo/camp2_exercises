import React from "react";
import {View , Text} from "react-native";
import List from "./List.js";

export default class Row extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
        <Text>{this.props.time.main.temp}°C</Text>
      </View>
    )
  }
}
