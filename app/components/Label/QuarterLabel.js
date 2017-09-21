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

} from 'react-native';
import Switch from 'react-native-switch-pro';

import styles  from './style';


export default class QuarterLabel extends Component {


  render() {
    return (
      <View style={{flex:2, flexDirection: 'row'}}>
  <View style={{flex: 2, flexDirection: 'column',justifyContent:'center',alignItems:'center',backgroundColor:'transparent',width: 58, height: 72}}>

  <View style={{flex: 2, flexDirection: 'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'transparent',width: 58, height: 55}}>
  <Image
    source={{uri: this.props.leftImage}}
    style={{height:'50%',width:'30%'}}/>
  </View>
  <View style={{flex: 2, flexDirection: 'row',justifyContent:'center',alignItems:'flex-start',backgroundColor:'transparent',width: 58, height: 24,marginTop:0}}>
    <Text style={styles.leftText}>{this.props.leftText}</Text>
  </View>

</View>
      <View style={{flex: 3, flexDirection: 'column',alignItems:'center',backgroundColor:'transparent'}}>

      <View style={{flex:1.2,width: 40, height: 55, backgroundColor:'transparent'}}>
      <Image
        source={{uri: this.props.imageSource }}
        style={{height:'100%',width:'100%'}}/>
        </View>
  <View style={{flex:0.5,width: 400, height: '100%',marginTop:5}}>
      <Text style={styles.quarterTitle}>
      {this.props.name}</Text>
      </View>
      <View style={{flex:0.5,backgroundColor:'transparent',marginBottom:10}}>
      <Switch style={{transform: [{ scaleX: .8 }, { scaleY: .8 }]}}
      backgroundInactive={'darkgrey'}
      onTintColor={'#2ecc71'}
      tintColor={'grey'}/>
      </View>
      </View>
  <View style={{flex: 2, flexDirection: 'column',justifyContent:'center',alignItems:'center',backgroundColor:'transparent',width: 1, height: 72}}>
  <View style={{flex: 2, flexDirection: 'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'transparent',width: 58, height: 55}}>
  <Image
    source={{uri: this.props.rightImage }}
    style={{height:'50%',width:'50%'}}/>
  </View>
  <View style={{flex: 2, flexDirection: 'row',justifyContent:'center',alignItems:'flex-start',backgroundColor:'transparent',width: 58, height: 24,marginTop:5}}>
  <Text style={styles.leftText}>{this.props.rightText}</Text>
  </View>
</View>
      </View>
    );
  }
}



AppRegistry.registerComponent('QuarterLabel', () => QuarterLabel);
