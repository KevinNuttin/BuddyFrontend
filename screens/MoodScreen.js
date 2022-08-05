import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"

import Header from "../components/cards/Header"
import Toggle from "../components/buttons/Toggle"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

function MoodScreen(props) {

  var header = Header("SearchGames", props)
  var toggle1 = Toggle("Chill", "TryHarder")
  var toggle2 = Toggle("Normal", "Compétitif")
  var toggle3 = Toggle("Zen", "Rageux")
  var toggle4 = Toggle("Civilisé", "Toxique")
  var confirmer = OffsetMiniButton("Confirmer", "PlatformScreen", goPlatform)
  var tunnel = Tunnel(2)

  function goPlatform(redirection){
    props.navigation.navigate(redirection); 
  }
  
  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Ton mood</Text>

            <View style={styles.buttons}>
              {toggle1}
              {toggle2}
              {toggle3}
              {toggle4}
            </View>

        {confirmer}

        {tunnel}

      </View>
    </ImageBackground>

  )

}

const styles = StyleSheet.create({

  background: {

    height: "100%",
  },

  container: {

    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {

    marginTop: 60,
    marginBottom: 60,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },

  buttons: {

    flex: 1,
    marginBottom: 20,
  }

});

export default MoodScreen