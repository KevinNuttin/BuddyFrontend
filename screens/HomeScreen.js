import React from "react";
import { StyleSheet, View, ImageBackground, Image, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'


import OffsetButton from "../components/buttons/OffsetButton"
import Tunnel from "../components/buttons/Tunnel"

export default function Homescreen(props) {

  var inscription = OffsetButton("Inscription", "SignInScreen",props)
  var connexion = OffsetButton("connexion", "BirthdayScreen",props)
  var discord = OffsetButton("connexion avec discord", "BirthdayScreen",props)
  var matthieu = OffsetButton("bouton pour matthieu", "BirthdayScreen",props)
  var kevin = OffsetButton("boutton pour Kevin", "BirthdayScreen",props)




  return (

    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require('../assets/backgrounds/fond_buddy.png')}/>

      <Image 
        style={styles.logo}
        source={require('../assets/logo/logo_buddy.png')}/>
 
      {inscription}
      {connexion}
      {discord}
      {matthieu}
      {kevin}
      
      <Tunnel/>
    </View>
   
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

  },

  logo: {

    width: 183,
    marginBottom: 80,

  }

});

