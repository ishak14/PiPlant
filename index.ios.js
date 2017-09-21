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
      itemDataSource: ds
    }
  }

  componentWillMount(){
    this.getItems();
  }
  componentDidMount(){
    this.getItems();
  }

  getItems(){
    let items = [{title:'Item one'},{title:'Item Two'}];
  }

  this.setState({
    itemDataSource: this.state.itemDataSource.cloneWithRows(items);
  });

    state = {


    }

  render() {


    return (

      <Image
      source={require('./app/assets/background4.png')}
      style={{width:'100%',height:'100%'}}>
      <StatusBar
      barStyle="light-content"/>

<Address/>
<Temperature
  temp={item}/>

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
      leftText='57%'
      rightImage='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/002-summer'
      rightText='5h'
      />





      <View style={{height:'100%',width:'100%',marginLeft:10}}>
      <FlowerBox
      style={{}}
      imageSource='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/016-nature-1.png'
      leftImage='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/021-drop'
      leftText='34%'
      rightImage='/Users/ishak/Projects/react-native/PiPlant/app/assets/new/png/002-summer'
      rightText='7h'
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
      right:5,
      fontFamily:'System',
      fontWeight:'400'}}>
      © Andy Ishak
      </Text>

      </Image>

    );
  };
};




AppRegistry.registerComponent('PiPlant', () => PiPlant);
