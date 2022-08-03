import React from "react"
import { StyleSheet, View, ImageBackground, Image } from 'react-native'

import OffsetButton from "../components/buttons/OffsetButton"

export default function Homescreen(props) {

  var inscription = OffsetButton("Inscription", "BirthdayScreen",props)
  var connexion = OffsetButton("connexion", "SignInScreen",props)
  var matthieu = OffsetButton("bouton pour matthieu", "BirthdayScreen",props)
  var kevin = OffsetButton("boutton pour Kevin", "SearchGames",props)

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/dégradé_buddy.png')}>

      <Image 
        style={styles.logo}
        source={require('../assets/logo/logo_buddy.png')}/>

      <View style={styles.container}>

        {inscription}
        {connexion}
        {matthieu}
        {kevin}

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

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  logo: {

    flex: 1,
    resizeMode: 'contain', 
    width: "50%",

  }

});