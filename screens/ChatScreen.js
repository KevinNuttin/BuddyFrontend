import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity,FlatList,Image, KeyboardAvoidingView, Platform} from "react-native"
import { connect } from 'react-redux';
import Header from "../components/cards/Header"

import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture" //! sera utilisée dans le header pour afficher la PP du match

// Page de chat

function ChatScreen(props) { 

    let pseudo = props.pseudo; // récupération du pseudo depuis le Store
    const header =  Header("RoomScreen",props) // changer la redirection pour page des conversations
    const [ text, setText] = useState('') // text de l'input au moment de la saisie
    const [ message, setMessage] = useState([]) // l'ensemble des messages affichés 
    var send = OffsetMiniButton("Envoyer","NO", sendMessage) // boutton pour envoyer le message
    var socket = props.socket // récupération du socket du user pour communiquer avec le serveur
    const [ currentRoom, setRoom] = useState('') // ID de la room (générée à la création d'une room) dans la quelle nous nous trouvons pour filtrer les messages entrants 
    let id = props.id; // ID de la room BDD (Pour récupérer l'historique des messages)

    useEffect(() => { 
      let data;

      // Récupération de tous les messages et le "token" de la room en BDD de la current room avec l'ID
      async function dataLoad () {
         var rawData = await fetch(`http://192.168.1.21:3000/message/messagerie?id=${id}`);
         data = await rawData.json()
         socket.emit('connected', data.message.room )
         setRoom(data.message.room) // le "token"

         setMessage(data.message.content) // historique des messages
      }  
      dataLoad();

       }, []);

       useEffect(() => {  // mise en place d'un écouteur pour récupérer les messages du serveur

        socket.on('messageFromBack', (newMessage, userPseudo, date, room) => {
          if(room == currentRoom){
          setMessage([...message,{message : newMessage , pseudo : userPseudo, date : date}]) } // affiche les messages dans la room désirée
        });
        return()=>{
        socket.off('message') // evite une faille de mémoire avec trop de render
        }
      }, [message]);
  
    async function sendMessage(){ // envoi du message en BDD et au serveur 
      var date = new Date();  
      socket.emit("message", currentRoom, text, pseudo);
       const data = await fetch('http://192.168.1.21:3000/message/send', {
        method: 'PUT',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `id=${id}&pseudo=${pseudo}&date=${date}&content=${text}`
      })
       setText('')
    }

    async function discordo(){  // envoi du pseudo Discord en dur //! A ajouter plus tard (avec une connexion discord)
      let mes = 'Voici mon discord : Kevin#03314'
      var date = new Date();
      socket.emit("message", currentRoom, mes, pseudo);
       const data = await fetch('http://192.168.1.21:3000/message/send', {
        method: 'PUT',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `id=${id}&pseudo=${pseudo}&date=${date}&content=${mes}`
      })
      
    }

    function dateFormat(date){  // Formatage de l'affichage de la date 
      var newDate = new Date(date);
      var format = newDate.getDate()+'/'+(newDate.getMonth()+1)+'/'+newDate.getFullYear()+'  '+newDate.getHours()+':'+newDate.getMinutes();
      return format;
    }

function chat(item){  // Alternance d'affichage du message en fonction de l'emetteur(style)
console.log(item,"ici");
  if(item.pseudo == pseudo){

   return(
   
    <View style={styles.bubbleUser}>
      <Text style={styles.pseudo}>{item.pseudo}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.date}>{dateFormat(item.date)}</Text>
    </View>
   )
  }else{

    return(

      <View style={styles.bubbleMatch}>
        <Text style={styles.pseudo}>{item.pseudo}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.date}>{dateFormat(item.date)}</Text>
      </View>
    )
    }
}

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>
      {header}

      <View style={styles.chat}>
          <FlatList showsVerticalScrollIndicator={false}  // <= à déjà une ScrollView
            data={message}                                // <= array requis
            renderItem={({item}) => (                  // <= Takes an item from data and renders it into the list
            chat(item)                                 // Renvoi à la fonction qui traite le style des messages en fonction de l'emmeteur
            )}
          />
     </View>

     <KeyboardAvoidingView style={styles.sender} behavior={Platform.OS === "ios" ? "padding" : "height"}
     keyboardVerticalOffset={Platform.select({ios: 10, android: 500})}>{/* fait remonter l'Input et le bouton à  l'affichage du clavier*/}

     <TextInput
        style={styles.input}
          onChangeText={(message) => setText(message)}
          value={text}
          keyboardType="default"
          placeholder=""

            />
     <View style={styles.ButtonSender}>
       {send}
       <TouchableOpacity style={styles.icon}
       onPress={() => {
      discordo(); // Fonction qui envoie le pseudo discord
    }
    }
       ><Image source={require('../assets/icons/discord_iconbuddy.png')} /></TouchableOpacity>
     </View>
     </KeyboardAvoidingView>
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
    justifyContent: "center",
    alignItems: "center",

  },

  bubbleUser: {

    backgroundColor: "#DDABFE",
    marginTop: 20,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    marginLeft: "20%",
    width:300,

  },

  bubbleMatch: {

    width:300,
    backgroundColor: "#FFA588",
    marginTop: 20,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },

  pseudo: {

    fontWeight: "600",
    fontSize: 12,
    letterSpacing: 0.5,
    color: "#372C60",
    marginBottom: 4,
  },

  message: {

    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 0.5,
    color: "#372C60",
    marginBottom: 4,
  },

  date: {

    fontWeight: "300",
    fontSize: 10,
    letterSpacing: 0.5,
    color: "#372C60",
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

  marginLeft: "15%",
},

});


function mapStateToProps(state) {
  return { socket: state.socket, id : state.room, pseudo :state.pseudo };
}






export default connect(
  mapStateToProps,
  null
)(ChatScreen);




