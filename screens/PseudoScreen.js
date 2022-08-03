import React, {useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import backIcon from "../components/icons/BackIcon"
import Input from "../components/buttons/Input"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import Tunnel from "../components/buttons/Tunnel"

function PseudoScreen(props) {

  // En attendant le composant Input
  const [text, setText] = useState('');

  //var pseudoInput = Input("Username")
  var retour = backIcon("BirthdayScreen", props)
  var confirmer = OffsetMiniButton("Confirmer", "EmailScreen",props)
  var tunnel = Tunnel(2)

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {retour}

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

    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  text: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 125,

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
    marginBottom: 20,
},

});

export default PseudoScreen
