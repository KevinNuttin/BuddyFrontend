
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,ScrollView,TouchableOpacity, Image} from "react-native"
import { Button, ListItem,  } from 'react-native-elements';
import { connect } from 'react-redux';



import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"



function ChatScreen(props) {

    const [roomList, setRoom] = useState([]);
    const [channel, setChannel] = useState([]);

    let rooms

    let  token = '3xFbU9iw24lAVWLVQssErWODNUK2gLWb'

    let pseudo = "CowBeez"

    useEffect(() => { 
      async function dataLoad () {
        var rawData = await fetch(`http://192.168.1.15:3000/message/historique?token=${token}`);
         rooms = await rawData.json()
        setRoom(rooms.message)
        
         console.log(rooms.message.length,"room");
         let table = [];
         for(let i = 0 ; i< rooms.message.length; i++){
            let user;
    
            if(pseudo == rooms.message[i].user1.pseudo){
                 user = rooms.message[i].user2
            }else {
                 user = rooms.message[i].user1
            }
            table.push(user)
            
        }
        setChannel(table)
    }
    dataLoad();
   
      }, []);
      console.log(channel,"channel")
    const list = [
        {
            name: 'Amy Farha',
            subtitle: 'Vice President'
          },
          {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
          },
         // more items
      ]

      
  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      <View style={styles.container}>
      <Text style={styles.text}>Liste des matchs</Text>
      <ScrollView style={{ width : 350}}>
      <View>
  {
    channel.map((item, i) => (
        <>
        <TouchableOpacity
        onPress={console.log("helo")}>
        <ListItem key={i}>
          <ListItem.Content style ={styles.truc}>
            
       <Image  style={styles.tinyLogo}
       source={{ uri: item.picture,}} />

           <Text>{item.pseudo}</Text> 
          </ListItem.Content>
        </ListItem>
        </TouchableOpacity></>
    ))
  }
</View>
      </ScrollView>

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
  tinyLogo: {
    
    width: 100,
    height: 100,
   

  },
  text: {

    marginTop: 100,
    marginBottom: 10,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },

});


function mapStateToProps(state) {
  return { socket: state.socket, pseudo : state.pseudo };
}






export default connect(
  mapStateToProps,
  null
)(ChatScreen);




