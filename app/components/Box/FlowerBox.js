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
  TouchableHighlight,
} from 'react-native';
import styles  from './style';

import Label from '../Label/Label';
export default class FlowerBox extends Component {


  render() {


    return (

      <View style={{width: '47.5%', height: 100}}>
        <TouchableHighlight
        underlayColor={ 'transparent' }
        style={styles.touchablehighlight, {backgroundColor:'rgba(255,255,255,1)',borderRadius:10}}
        onPress={() => {}}>
          <View style={styles.container}>
        <Label

        imageSource={this.props.imageSource}
        name={this.props.name}
        leftImage={this.props.leftImage}
        leftText={this.props.leftText}
        rightImage={this.props.rightImage}
        rightText={this.props.rightText}
        />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}



AppRegistry.registerComponent('FlowerBox', () => FlowerBox);
