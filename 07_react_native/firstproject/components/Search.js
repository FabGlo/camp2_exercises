import React from 'react';
import { TextInput , Image , Button , View} from 'react-native';
import style from "../style.js";
import {StackNavigator} from 'react-navigation';
import List from "./List.js";

class Search extends React.Component{
  static navigationOptions={
    title: "Search a City",
    tabBarIcon: () => {
      return <Image source={require('./Icons/home.png')} style={{width: 26, height: 26}}/>
    }
  }

  constructor(props){
    super(props),
    this.state={
      city: "",
    }
  }

  setCity (city){
    this.setState({
      city: city
    })
  }

  submit(){
    this.props.navigation.navigate('Result', {city:this.state.city})
  }

  render(){
    return(
      <View style={style.container}>
      <TextInput
        style={style.input}
        onChangeText={(text)=>this.setCity(text)}
        value={this.state.city}
        />
      <Button color={style.color} onPress={()=> this.submit()} title="Search"/>
      </View>
      );
    }
  }

const navigationOptions={
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
}

  export default StackNavigator({
    Search:{
      screen: Search,
      navigationOptions
    },
    Result:{
      screen: List,
      navigationOptions
    }
  })
