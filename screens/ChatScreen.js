import React, { useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput} from "react-native"

import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"


function ChatScreen(props) {

    const [ message, setMessage] = useState("")

    var send = OffsetMiniButton("Envoyer", sendMessage)

    function sendMessage(){

    }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      <View style={styles.container}>
      </View>

      <View style={styles.sender}>
        <TextInput
        style={styles.input}
            onChangeText={(message) => setMessage(message)}
            value={message}
            keyboardType="default"
            placeholder=""
        />
        {send}
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : "DADADA",
  },

  sender: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    borderTopWidth : 2,
    borderBottomColor: "#372C60",
    marginTop: 300,

  },

  input: {

    width : 200,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
},

});

export default ChatScreen