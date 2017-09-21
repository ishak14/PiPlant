'use strict'
let React = require('react-native');
let {StyleSheet} = React;
const constants = {
  actionColor:'#3cb371'
}

module.exports = StyleSheet.create({
container: {
  backgroundColor: "green",
  flex: 1,

},
listview: {
  flex: 1,
},
li:{
  backgroundColor: "white",
  borderBottomColor: '#eee',
  borderColor: 'transparent',
  borderWidth: 1,
  paddingLeft: 16,
  paddingTop:14,
  paddingBottom: 16,
},
liContainer: {
  flex:2,
},
liText: {
  color: "black",
  fontSize: 18,
  textAlign: 'left',
},




navbar: {
  alignItems: 'center',
  backgroundColor: 'grey',
  borderBottomColor: '#eee',
  borderColor: 'transparent',
  borderWidth: 1,
  justifyContent: 'center',
  height: 50,

},
navbarTitle:{
  color: '#444',
  fontSize: 24,
  fontWeight: '500',
  justifyContent: 'center',
  textAlign: 'center',
},
toolbar: {
  backgroundColor: '#fff',
  height:20,
}

})
