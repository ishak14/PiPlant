/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCn5rjYc5tOmYfbE2AfZ05jW24-em9hLsg",
  authDomain: "pi-plant-603c5.firebaseapp.com",
  databaseURL: "https://pi-plant-603c5.firebaseio.com",
  projectId: "pi-plant-603c5",
  storageBucket: "pi-plant-603c5.appspot.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);


import styles from './app/style2';
import Label from './app/components/Label/Label';
import QuarterBox from './app/components/Box/QuarterBox';
import HalfBox from './app/components/Box/HalfBox';
import FlowerBox from './app/components/Box/FlowerBox';
import Box from './app/components/Box/Box';
import Address from './app/components/Address/Address';
import Temperature from './app/components/Temperature/Temperature';


export default class PiPlant extends Component {
  constructor(){
    super();

    this.state = {

      address: '',
      temperature: '',
      plantOneMoisture: '',
      plantOneSun: '',
      plantTwoMoisture: '',
      plantTwoSun: '',
      lamp1: 0,
      lamp2: 0,
      appliance:0,
    }



    this.homeRef = this.getRef().child('home');


  }

  getRef(){
    return firebaseApp.database().ref();
  }

componentWillMount(){
  this.getItems(this.homeRef);
}
componentDidMount(){
  this.getItems(this.homeRef);
}

getItems(homeRef){

  homeRef.on('value',(snap) =>{
   let items = [];
    snap.forEach((child) => {
      items.push({
        title: child.val().title,
        _key: child.key
      });
    });

      this.setState({
        address: items[0].title,
        appliance: items[1].title,
        lamp1: items[2].title,
        lamp2: items[3].title,
        plantOneMoisture: items[4].title,
        plantOneSun: items[5].title,
        plantTwoMoisture: items[6].title,
        plantTwoSun: items[7].title,
        temperature: items[8].title,

      });
})


}


  render() {


    return (

      <Image
      source={require('./app/assets/background4.png')}
      style={{width:'100%',height:'100%'}}>
      <StatusBar
      barStyle="light-content"/>








<Address
addressName={this.state.address}/>
<Temperature
  temp={this.state.temperature}/>


      <ScrollView style={{zIndex:100}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{width: '100%', height: 200,justifyContent:'center',alignItems:'center',zIndex:100}}>

      </View>

      <View style={{marginLeft:10}}>

      <View style={{flex: 2, flexDirection: 'row'}}>
      <FlowerBox
      imageSource='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/014-nature-4.png'
      name="Oregano"
      leftImage='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/021-drop'
      leftText={this.state.plantOneMoisture}
      rightImage='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/002-summer'
      rightText={this.state.plantOneSun}
      />





      <View style={{height:'100%',width:'100%',marginLeft:10}}>
      <FlowerBox
      style={{}}
      imageSource='./assets/new/png/016-nature-1.png'
      leftImage='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/021-drop'
      leftText={this.state.plantTwoMoisture}
      rightImage='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/002-summer'
      rightText={this.state.plantTwoSun}
      name="Basil"/>
      </View>


      </View>
      </View>
      <View style={{flexDirection:'row',width: '100%', height: '100%',marginTop:10,backgroundColor:'transparent'}}>



      <View style={{flex:0.5,marginLeft:10,marginRight:5}}>
      <QuarterBox
      imageSource='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/007-technology-5.png'
      name='Living Room'/>
      </View>
      <View style={{flex:0.5,marginLeft:5,marginRight:5}}>
      <QuarterBox
      imageSource='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/007-technology-5.png'
      name='Workstation'/>
      </View>
      <View style={{flex:0.5,marginLeft:5,marginRight:5}}>
      <QuarterBox
      imageSource='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/007-technology-5.png'
      name='Bedroom'/>
      </View>
      <View style={{flex:0.5,marginLeft:5,marginRight:10}}>
      <QuarterBox
      imageSource='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/020-technology.png'
      name='Appliances'/>
      </View>




      </View>




      </View>
      </ScrollView>


      <Text style={{textAlign:'right',
      fontSize:8,
      backgroundColor:'transparent',
      color:'rgba(255,255,255,0.9)',
      bottom:5,
      right:10,
      fontFamily:'System',
      fontWeight:'400'}}>
      © Andy Ishak
      </Text>

      </Image>

    );
  };
};




AppRegistry.registerComponent('PiPlant', () => PiPlant);
