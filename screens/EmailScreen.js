import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import Header from "../components/cards/Header"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"


import { connect } from 'react-redux';

// Page d'inscription pour l'email

function BirthdayScreen(props) {

  const [text, setText] = useState(props.user.mail);

  // Ici on parametre les composants importés
  var header = Header("PseudoScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "PasswordScreen",comfirmation)
  var tunnel = Tunnel(3)

  // Permet la redicrection au click avec une condition d'Input non null
  function comfirmation(redirection){
    if(text != null){
    props.onConfirmer(text) // Appel du dispatch pour stocker l'email dans le store
    props.navigation.navigate(redirection); }
  }
  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Ton Email</Text>

        <TextInput
          style={styles.input}
          onChangeText={(value) => setText(value)}
          value={text}
          keyboardType="default"
          placeholder="C'est presque fini..."
        />

        {confirmer}

        {tunnel}

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
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {

    marginTop: 100,
    marginBottom: 140,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },

  input: {

    width : 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 60,
},

});



function mapDispatchToProps(dispatch) {
  return {
    onConfirmer: function (mail) {
      dispatch({ type: 'addMail', mail : mail  })
    }
  }
}

function mapStateToProps(state) {
  return { user : state }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayScreen);

