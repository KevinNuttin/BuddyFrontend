import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';

import OffsetButton from "../components/buttons/OffsetButton"

export default function Homescreen(props) {
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require('../assets/backgrounds/fond_buddy.png')}/>
      <Image 
        style={styles.logo}
        source={require('../assets/logo/logo_buddy.png')}/>

      <OffsetButton titleButton="Inscription" onPress={() => props.navigation.navigate('BirthdayScreen')}/>
      <OffsetButton titleButton="Connexion" onPress={() => props.navigation.navigate('SignInScreen')}/>
    </View>
   
  );
}


const styles = StyleSheet.create({

  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  logo: {

    flex:1,
    justifyContent: "center",
    alignItems: "center",
    width: 183,
    marginTop: 100,

  }

});

