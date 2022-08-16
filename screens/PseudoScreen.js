import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import Header from "../components/cards/Header"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

import { connect } from 'react-redux';

// page d'ajout du pseudo lors de l'incription

function PseudoScreen(props) {
 
  const [text, setText] = useState(props.user.pseudo);

  var header = Header("BirthdayScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "EmailScreen",comfirmation)
  var tunnel = Tunnel(2)

  function comfirmation(redirection){
    if(text != null){ // vérification que le pseudo ne soit pas null
    props.onConfirmer(text) // ajout du pseudo dans le store
    props.navigation.navigate(redirection); }
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Ton Pseudo</Text>

        <TextInput
        style={styles.input}
                onChangeText={(value) => setText(value)}
                value={text}
                keyboardType="default"
                placeholder="On est sûr qu'il est beau"
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

//syntaxe pour le redux
function mapDispatchToProps(dispatch) {
  return {
    onConfirmer: function (pseudo) {
      dispatch({ type: 'addPseudo', pseudo : pseudo  })// sauvegarde du pseudo dans le store
    }
  }
}

function mapStateToProps(state) {
  return { user : state }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PseudoScreen);
