import React, { useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput, ScrollView, FlatList} from "react-native"

import Header from "../components/cards/Header"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"


function ChatScreen(props) {

  const [ message, setMessage] = useState("")

  var header = Header("HomeScreen", props) // changer la redirection pour page des conversations
  var send = OffsetMiniButton("Envoyer", sendMessage)

  function sendMessage(){

  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

        <ScrollView style={styles.chat}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>

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

  chat: {

    flex: 1,
    flexDirection: "column",
    textAlign: "center",
    borderWidth: 1,

    backgroundColor : "DADADA",
  },

  sender: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    borderTopWidth : 1,
    borderBottomColor: "#372C60",
    marginTop: 300,

  },

  input: {

    width : 300,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 24,
},

});

export default ChatScreen