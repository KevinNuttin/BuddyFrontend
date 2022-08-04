import React from "react"
import { StyleSheet, Text, View, ImageBackground} from "react-native"


import Header2 from "../components/cards/Header2"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"


function MoodScreen(props) {

  //var header = Header()
  //var message = OffsetMiniButton("Message", "DiscoverScreen") // redirection à definir
  var header = Header2("swipe", "DiscoverScreen", goDiscover)
  var message = OffsetMiniButton("Message", "DiscoverScreen", goDiscover)
  var swipe = OffsetMiniButton("swipe", "DiscoverScreen", goDiscover)

  function goDiscover(redirection){
    props.navigation.navigate(redirection); 
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <View style={styles.profils}>
        {ProfilPicture()}
        {ProfilPicture()}
        </View>


        <Text style={styles.text1}>I'ts a MATCH !</Text>
        <Text style={styles.text2}>With Sophie_Fonsec</Text>


        {message}
        {swipe}


      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background: {

    height: "100%",
    
  },

  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  background: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  profils: {

    flexDirection: "row",

  },

  text1: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    fontWeight: "Bold",
    fontSize: 36,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",

  },

  text2: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    fontWeight: "300",
    fontSize: 18,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",

  },

  input: {
    width : 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
},

});


export default MoodScreen
