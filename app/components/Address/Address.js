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



export default class Address extends Component {


  render() {
    return (
      <Text style={{textAlign:'left',
      fontSize:24,
      backgroundColor:'transparent',
      color:'rgba(255,255,255,0.9)',
      top:40,
      left:10,
      fontFamily:'System',
      fontWeight:'400'}}>
      Fyrisgatan 12B
      </Text>
    );
  }
}



AppRegistry.registerComponent('Address', () => Address);
