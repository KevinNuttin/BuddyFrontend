
import React, { useEffect, useState } from 'react';
import {StyleSheet, View, ImageBackground, Image} from "react-native";

import OffsetButton from "../components/buttons/OffsetButton";

import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux'; 

 function Homescreen(props) {

  var inscription = OffsetButton("Inscription", "BirthdayScreen", inscription)
  var connexion = OffsetButton("Connexion", "SignInScreen", connexion) //SignInScreen

  function inscription(redirection){ 
    props.navigation.navigate(redirection); 
  }
  function connexion(redirection){
    props.navigation.navigate(redirection); 
  }



  useEffect(() => { 
    var socket = socketIOClient("http://192.168.10.143:3000");

    props.saveSocket(socket);


 

  }, []);



  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/backgrounds/dégradé_buddy.png")}
    >
      <Image
        style={styles.logo}
        source={require("../assets/logo/logo_buddy.png")}
      />

      <View style={styles.container}>
        {inscription}
        {connexion}
      </View>

    </ImageBackground>
  );
}

function mapStateToProps(state) {
  return { socket: state.socket };
}

function mapDispatchToProps(dispatch) {
  return {
    saveSocket: function (socket) {
      dispatch({ type: 'saveSocket', socket });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homescreen);





const styles = StyleSheet.create({

  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    flex: 1,
    resizeMode: "contain",
    width: "50%",
    marginTop: 80,
    marginBottom: -100,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

});
