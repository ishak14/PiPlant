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
import styles  from './style';


export default class Label extends Component {


  render() {
    return (
      <View style={{flex:2, flexDirection: 'row'}}>
  <View style={{flex: 2, flexDirection: 'column',justifyContent:'center',alignItems:'center',backgroundColor:'transparent',width: 58, height: 72}}>

  <View style={{flex: 2, flexDirection: 'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'transparent',width: 58, height: 55}}>
  <Image
    source={{uri: this.props.leftImage}}
    style={{height:'50%',width:'30%'}}/>
  </View>
  <View style={{flex: 2, flexDirection: 'row',justifyContent:'center',alignItems:'flex-start',backgroundColor:'transparent',width: 58, height: 24,marginTop:5}}>
    <Text style={styles.leftText}>{this.props.leftText}</Text>
  </View>

</View>
      <View style={{flex: 2, flexDirection: 'column',justifyContent:'center',alignItems:'center',backgroundColor:'transparent'}}>

      <View style={{width: 50, height: 55}}>
      <Image
        source={{uri: this.props.imageSource }}
        style={{height:'100%',width:'100%'}}/>
        </View>
  <View style={{width: 400, height: '10%',marginTop:0}}>
      <Text style={styles.title}>
      {this.props.name}</Text>
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



AppRegistry.registerComponent('Label', () => Label);
