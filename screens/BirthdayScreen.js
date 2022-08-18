import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"

import Header from "../components/cards/Header"
import MaskInput from 'react-native-mask-input'
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

import { connect } from 'react-redux';

// Page d'inscription pour la date de naissance

function BirthdayScreen(props) {

  const [text, setText] = useState(props.user.age);

  // Ici on parametre les composants importés
  var header = Header("HomeScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "PseudoScreen",comfirmation)
  var tunnel = Tunnel(1)

  // Permet la redicrection au click avec une condition d'Input non null
  function comfirmation(redirection){
    if(text != null){
    props.onConfirmer(text) // Appel du dispatch pour stocker la date de naissance dans le store
    props.navigation.navigate(redirection); }
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <Text style={styles.text}>Ta date de naissance</Text>

        <MaskInput  // RegEx pour la saisie de la date de naissance avec des Slash
          style={styles.input}
          onChangeText={(value) => setText(value)}
          value={text}
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          keyboardType="phone-pad"
          placeholder="JJ/MM/AAAA"
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

// Appel la fonction du reducer pour stocker l'Age dans la Store avec l'argument Age
function mapDispatchToProps(dispatch) {
  return {
    onConfirmer: function (age) {
      dispatch({ type: 'addAge', age : age  })
    }
  }
}

// Récupère l'Age s'il existe, pour le conserver en cas de changment de page
function mapStateToProps(state) {
  return { user : state }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BirthdayScreen);

