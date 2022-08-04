import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import Header from "../components/cards/Header"
import Input from "../components/buttons/Input"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

import { connect } from 'react-redux';


function PseudoScreen(props) {
 
  // En attendant le composant Input
  const [text, setText] = useState(props.user.pseudo);

  //var pseudoInput = Input("Username")
  var header = Header("BirthdayScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "EmailScreen",comfirmation)
  var tunnel = Tunnel(2)

  function comfirmation(redirection){
    if(text != null){
    props.onConfirmer(text)
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

        {/* A remplacer par le composant Input*/}
        <TextInput
        style={styles.input}
                onChangeText={(value) => setText(value)}
                value={text}
                keyboardType="default"
        />
        {/*{pseudoInput}*/}
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


function mapDispatchToProps(dispatch) {
  return {
    onConfirmer: function (pseudo) {
      dispatch({ type: 'addPseudo', pseudo : pseudo  })
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
