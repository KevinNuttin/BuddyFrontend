import React, { useState} from "react"
import { StyleSheet, Text, View, ImageBackground, TextInput, Image, FlatList, TouchableOpacity} from "react-native"

import Header from "../components/cards/Header"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"


function ChatScreen(props) {

  const [ message, setMessage] = useState("")

  var header = Header("HomeScreen", props) // changer la redirection pour page des conversations
  var send = OffsetMiniButton("Envoyer", sendMessage)

  const messages = [
    {
      id: "1",
      userName: "John Doe",
      messageTime: "1 minute ago",
      messageText: "T'as du saucisson dans ton frigo ?"
    },
    {
      id: "2",
      userName: "Igor Gonzola",
      messageTime: "0 minute ago",
      messageText: "Oui mais je préfère le mettre au congélateur.. Bon, on joue ?"
    }
  ]
  

  function sendMessage(){

  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

        <View style={styles.chat}>
          <FlatList                            // <= à déjà une ScrollView
            data={messages}                    // <= array requis
            keyExtractor={item => item.id}     // <= Key is used for caching and as the react key to track item re-ordering
            renderItem={({item}) => (          // <= Takes an item from data and renders it into the list

              <View style={styles.bubbleUser}>
                <Text>{item.userName}</Text>
                <Text>{item.messageText}</Text>
                <Text>{item.messageTime}</Text>
              </View>
            )}
          />
          </View>

          <View style={styles.sender}>
            <TextInput
              style={styles.input}
                  onChangeText={(message) => setMessage(message)}
                  value={message}
                  keyboardType="default"
                  placeholder=""
            />
            <View style={styles.ButtonSender}>
              {send}
              <TouchableOpacity style={styles.icon}><Image source={require('../assets/icons/discord_iconbuddy.png')} /></TouchableOpacity>
            </View>

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
    flexWrap: "wrap-reverse",
    marginRight: "-15%",
  },

  bubbleUser: {
    
    width: "80%",
    backgroundColor: "#DDABFE",
    marginTop: 20,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,

  },

  bubbleMatch: {
    
    width: "80%",
    backgroundColor: "#FFA588",
    marginTop: 20,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,

  },

  sender: {

    alignItems: 'center',
    justifyContent: 'center',

    borderTopWidth : 1,
    borderBottomColor: "#372C60",
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

ButtonSender: {

  flexDirection: "row",

},

icon: {

  marginLeft: 40,
},

});

export default ChatScreen