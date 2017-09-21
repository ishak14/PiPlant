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
  ListView,
  TouchableHighlight
} from 'react-native';
const styles = require ('./app/style');

import Toolbar from './app/components/Toolbar/Toolbar';


import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCPvbTFjMBsjEEXT6UE-YpvjOSkE0ufN1I",
  authDomain: "piplant-34ba8.firebaseapp.com",
  databaseURL: "https://piplant-34ba8.firebaseio.com",
  projectId: "piplant-34ba8",
  storageBucket: "piplant-34ba8.appspot.com",
}
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class PiPlant extends Component {
    constructor(){
      super();
      let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
      this.state = {
        itemDataSource: ds
      }

      this.itemsRef = this.getRef().child('items');

      this.renderRow = this.renderRow.bind(this);
      this.pressRow = this.pressRow.bind(this);
    }
    getRef(){
      return firebaseApp.database().ref();
    }

  componentWillMount(){
    this.getItems(this.itemsRef);
  }

  componentDidMount(){
    this.getItems(this.itemsRef);
  }
    getItems(itemsRef){
    //  let items = [{title: 'Item Zero'},{title:'Item One'},{title: 'Item Two'}];

itemsRef.on('value',(snap) => {
  let items = [];
  snap.forEach((child) => {
    items.push({
      title: child.val().title,
      Moisture: child.val().Moisture,
      _key: child.key
    });

  });
  this.setState({
    itemDataSource: this.state.itemDataSource.cloneWithRows(items)
  });
});
}



    pressRow(item){
      console.log(item);
    }

    renderRow(item){
      return (
        <TouchableHighlight onPress={() => {
          this.pressRow(item);
        }}>
        <View style={styles.li}>
          <Text style={styles.liText}>{
            item.title +' moisture val: ' +
            item.Moisture}</Text>

        </View>
        </TouchableHighlight>
      );
    }
  render() {
    return (
      <View style={styles.container}>
       <Toolbar title="ItemLister"/>


        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />


      </View>
    );
  }
}



AppRegistry.registerComponent('PiPlant', () => PiPlant);
