
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,ScrollView,TouchableOpacity, Image} from "react-native"
import { Button, ListItem,  } from 'react-native-elements';
import { connect } from 'react-redux';
import Header from "../components/cards/Header"

import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"



function ChatScreen(props) {

    const [roomList, setRoom] = useState([]);
    const [channel, setChannel] = useState([]);
    const header =  Header("DiscoverScreen",props)
    let rooms

    let  token = '-pJ9drXw5U9WgxOrQ_vuR2GYFMXfIwFU'

    let pseudo = "CowBeez"

    useEffect(() => { 

      async function dataLoad () {
        var rawData = await fetch(`http://192.168.1.14:3000/message/historique?token=${token}`);
         rooms = await rawData.json()
       console.log(rooms);
        setRoom(rooms.message)
        
        
         let table = [];
         let id;
         for(let i = 0 ; i< rooms.message.length; i++){
            let user;
    
            if(pseudo == rooms.message[i].user1.pseudo){
                 user = rooms.message[i].user2
            }else {
                 user = rooms.message[i].user1
            }
            table.push({user: user , id: rooms.message[i]._id})
            
        }
        console.log(table,"tabbbble");
        setChannel(table)
    }
    dataLoad();
   
      }, []);
   


      if(!rooms){
  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>
{header}
      <View style={styles.container}>
      <Text style={styles.text}>Liste des matchs</Text>
      <ScrollView style={{ width : 350}}>
      <View>
  {
    channel.map((item, i) => (

        <TouchableOpacity key={i}
        onPress={() => {
        
            props.saveRoom(item.id)
            props.navigation.navigate("ChatScreen")}}
        >
            
        <ListItem >
          <ListItem.Content style ={styles.truc}>
            
       <Image  style={styles.tinyLogo}
       source={{ uri: item.user.picture,}} />

           <Text>{item.user.pseudo}</Text> 
          </ListItem.Content>
        </ListItem>
        </TouchableOpacity>
    ))
  }
</View>
      </ScrollView>

      </View>

    </ImageBackground>
  );
}
  else{
    return (

        <ImageBackground
          resizeMode="cover"
          style={styles.background}
          source={require('../assets/backgrounds/fond_buddy.png')}>
    {header}
          <View>
          <Text style={styles.text2}>Liste des matchs</Text>
          <View style={{ width : 350}}>
          <Text style={{   
  marginTop : 100,

    fontWeight: "400",
    fontSize: 15,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",}}>           C'est vide par ici :/</Text>
          </View>
    
          </View>
    
        </ImageBackground>
      );
}
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

    marginTop: 10,
    marginBottom: 10,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },  text2: {

    marginTop: 100,
    marginBottom: 0,

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


function mapDispatchToProps(dispatch) {
    return {
      saveRoom: function (room) {
       
        dispatch({ type: 'addRoom', room });
      },
    };
  }



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen);




