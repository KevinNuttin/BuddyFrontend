import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,ScrollView,TouchableOpacity} from "react-native"
import { Button, ListItem,  } from 'react-native-elements';
import { connect } from 'react-redux';



import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"



function ChatScreen(props) {

    const [ text, setText] = useState('')
    const [ message, setMessage] = useState([])
    var send = OffsetMiniButton("Envoyer","NO", sendMessage)
    var socket = props.socket;


    function sendMessage(){
      socket.emit("message", currentRoom, text, pseudo);

    }

    useEffect(() => { 
    socket.on('messageFromBack', (room, newMessage, userPseudo) => {
      async function relou(){
        if(currentRoom == room){
       setMessage([...message,{content : newMessage , pseudo : userPseudo}])}
      }
    relou();
    });
  }, [message]);

  

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      <View style={styles.container}>
     
      <ScrollView style={{ width : 300, marginTop : 20}}>
        {message.map((message, i) =>
        (<ListItem key={i}>
          <ListItem.Content>
            <ListItem.Title>{message.content}</ListItem.Title>
            <ListItem.Subtitle>{message.pseudo}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>)
        )}
      </ScrollView>

      </View>

      <View style={styles.sender}>
        <TextInput
        style={styles.input}
            onChangeText={(val) => setText(val)}
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


function mapStateToProps(state) {
  return { socket: state.socket };
}






export default connect(
  mapStateToProps,
  null
)(ChatScreen);




