import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"

import Header from "../components/cards/Header"
import Toggle from "../components/buttons/Toggle"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

function MoodScreen(props) {

  var header = Header("SearchGames", props)
  var toggle = Toggle("Chill", "TryHarder", props)
  var confirmer = OffsetMiniButton("Confirmer", "PlatformScreen", props)
  var tunnel = Tunnel("2")

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Ton mood</Text>

        {toggle}
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

  input: {
    width : 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 40,
},

});


export default MoodScreen
