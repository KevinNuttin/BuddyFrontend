import React from "react";
import { StyleSheet, View, ImageBackground, Image, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'


import OffsetButton from "../components/buttons/OffsetButton"
import Tunnel from "../components/buttons/Tunnel"

export default function Homescreen(props) {
  return (

    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require('../assets/backgrounds/fond_buddy.png')}/>

      <Image 
        style={styles.logo}
        source={require('../assets/logo/logo_buddy.png')}/>

      <OffsetButton titleButton="Inscription" onPress={() => props.navigation.navigate('BirthdayScreen')}/>
      <OffsetButton titleButton="Connexion" onPress={() => props.navigation.navigate('SignInScreen')}/>
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

