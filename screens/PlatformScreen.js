import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import Header from "../components/cards/Header"
import ButtonLeft from "../components/buttons/ButtonLeft"
import ButtonRight from "../components/buttons/ButtonRight"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

function PlatformScreen(props) {

  var header = Header("MoodScreen", props)
  var PC = ButtonLeft("PC")
  var PS4 = ButtonLeft("PS4")
  var XboxOne = ButtonLeft("XboxOne")
  var Switch = ButtonRight("Switch")
  var PS5 = ButtonRight("PS5")
  var XboxSeries = ButtonRight("XboxSeries")
  var confirmer = OffsetMiniButton("Confirmer", "LanguageScreen", goLanguage)
  var tunnel = Tunnel(3)

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

          <View style={styles.buttons}>
            {PC}{Switch}
            {PS4}{PS5}
            {XboxOne}{XboxSeries}
          </View>

            {confirmer}

            {tunnel}

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    flexDirection: "column",
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

  buttons: {

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    width: "90%",
    marginTop: -10,
    marginBottom: 250,
  }

});


export default PlatformScreen
