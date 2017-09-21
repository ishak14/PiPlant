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

import Label from '../Label/QuarterLabel';
export default class QuarterBox extends Component {
  state = {
    buttonEnabled: true,


  }

  render() {
    const buttonEnabled = this.state.buttonEnabled ? 'rgba(255, 255, 255,0.85)' : 'rgba(255,255,255,1)'

    return (

      <View style={{width: '100%', height: 100}}>
        <TouchableHighlight
        underlayColor={  'rgba(255,255,255,1)' }
        style={styles.touchablehighlight, {backgroundColor:buttonEnabled,borderRadius:10}}
        onPress={() => {}}>
          <View style={styles.container}>
        <Label
        switchPress={() => this.setState({buttonEnabled: !this.state.buttonEnabled})}
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



AppRegistry.registerComponent('QuarterBox', () => QuarterBox);
