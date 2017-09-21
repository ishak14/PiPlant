import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: null,
    },

    temperatureText: {
        marginTop: 20,
        marginBottom: 40,
        fontSize: 70,
        color: '#fff',
        fontFamily: 'sans-serif-thin',
    },

    container: {
       flex:1,
        justifyContent: 'space-between',
        //alignItems: 'center',
        flexDirection: 'column',

        width: '33%',
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.6)',
        overflow: 'visible',
        borderColor: 'blue',
        padding: 10,
        marginTop:20,
        marginBottom:5,
        marginLeft:10,
        marginRight:10,
    },
    container2: {
       flex:2,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',


    },
    contentContainer: {
        paddingVertical: 200

    },
    textBox:{
      fontSize: 20,
    //  textAlign: 'center',
    marginLeft:5,
      color: "white",
    //  textDecorationColor: 'blue',
    //  justifyContent: 'space-between',
    },
    icons:{
      resizeMode: 'contain',
      //flexDirection: 'row',
      width:20,
      height:18,
      paddingVertical:12,
    },
    switch:{

      marginLeft:180,
      //flexDirection:'row',
    },

    textInput: {
    borderColor: '#000',
    borderWidth: 2.0,
    backgroundColor: '#fff',
    height: 40,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 30,
    padding: 2,
  },
  textInputAlt: {
    borderColor: '#e71636',
},
});
