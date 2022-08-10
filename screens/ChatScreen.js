import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,ScrollView,TouchableOpacity} from "react-native"
import { Button, ListItem,  } from 'react-native-elements';
import { connect } from 'react-redux';
import Header from "../components/cards/Header"



import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"



function ChatScreen(props) {

let pseudo = props.pseudo


  const header =  Header("RoomScreen",props)

    const [ text, setText] = useState('')
    const [ message, setMessage] = useState([])
    var send = OffsetMiniButton("Envoyer","NO", sendMessage)
    var socket = props.socket;

    const [ currentRoom, setRoom] = useState('')



    async function sendMessage(){
      socket.emit("message", currentRoom, text, pseudo);
       //await fetch(`http://192.168.1.15:3000/message/send?id=${id}`);
       setText('')
    }

    useEffect(() => { 
    


      let data;
      let id = props.id;
  
      console.log(id,);
      async function dataLoad () {
        var rawData = await fetch(`http://192.168.1.15:3000/message/messagerie?id=${id}`);
         data = await rawData.json()
        
         socket.emit('connected', data.message.room )
        setRoom(data.message.room)
         setMessage(data.message.content)
         console.log(message);
      }  
     
      dataLoad();
     

    socket.on('messageFromBack', (newMessage, userPseudo) => {
      async function relou(){

       setMessage([...message,{message : newMessage , pseudo : "ghghj"}])}
      
    relou();


    });
  }, []);

  

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>
{header}
      <View style={styles.container}>
     
      <ScrollView style={{ width : 300, marginTop : 20}}>
        {message.map((message, i) =>
        (<ListItem key={i}>
          <ListItem.Content>
            <ListItem.Title>{message.message}</ListItem.Title>
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
        value={text}
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
  return { socket: state.socket, id : state.room, pseudo :state.pseudo };
}






export default connect(
  mapStateToProps,
  null
)(ChatScreen);




