import React from 'react';
import About from './components/About.js';
import Search from './components/Search.js';
import {TabNavigator} from 'react-navigation';
import {View} from 'react-native';
import globalStyle from "./style.js";

const Tabs = TabNavigator({
  Search: {screen: Search},
  About: {screen: About}
  },{
    tabBarOptions:{
      showIcon: true,
      showLabel: false,
      indicatorStyle:{
        height: 3,
        backgroundColor: "#FFF"
      },
      style:{
        backgroundColor: globalStyle.color,
      }
    },
  }
)

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Tabs />
      </View>
    );
  }
}
