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
} from 'react-native';



export default class Temperature extends Component {


  render() {
    return (
      <Text style={{textAlign:'center',
      fontSize:100,
      backgroundColor:'transparent',
      color:'rgba(255,255,255,0.8)',
      top:80,bottom:100,
      fontFamily:'System',
      fontWeight:'100'}}>
      {this.props.temp}</Text>
    );
  }
}



AppRegistry.registerComponent('Temperature', () => Temperature);
