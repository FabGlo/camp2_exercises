import React from 'react';
import { Text, View , StyleSheet , Image , Button} from 'react-native';
import style from "../style.js";


export default class About extends React.Component{

  static navigationOptions={
    tabBarIcon: () => {
      return <Image source={require('./Icons/user.png')} style={{width: 30, height: 30}}/>
    }
  }

  search() {
    this.props.navigation.navigate('Search')
  }

  render(){
    return(
      <View style={style.container}>
        <Text style={style.title}>About the Application</Text>
        <Text>lorem ipsum </Text>
        <Button color={style.color} onPress={()=>this.search()} title="Search a City" />
      </View>
    );
  }
}
