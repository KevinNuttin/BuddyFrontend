import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import Header from "../components/cards/Header"
import Toggle from "../components/buttons/Toggle"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

function PlatformScreen(props) {

  var header = Header("MoodScreen", props)
  var toggle1 = Toggle("PC", "Xbox")
  var toggle2 = Toggle("PS", "Switch")
  var toggle3 = Toggle("Mobile", "Retro")
  var confirmer = OffsetMiniButton("Confirmer", "LanguageScreen", goLanguage)
  var tunnel = Tunnel(4)

  function goLanguage(redirection){
    props.navigation.navigate(redirection); 
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Sur quelle plateforme ?</Text>

        {toggle1}
        {toggle2}
        {toggle3}

        {confirmer}

        {tunnel}

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  background: {

    height: "100%",

  },

  text: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",

  },

});


export default PlatformScreen
