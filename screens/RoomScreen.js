
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,ScrollView,TouchableOpacity, Image} from "react-native"
import { Button, ListItem,  } from 'react-native-elements';
import { connect } from 'react-redux';
import Header from "../components/cards/Header"

import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"
import AsyncStorage from '@react-native-async-storage/async-storage';



let token='';

AsyncStorage.getItem("users", function(error, data) {
    console.log("data", data);
    token = data
   });


function ChatScreen(props) {

    const [roomList, setRoom] = useState([]);
    const [channel, setChannel] = useState([]);
    const header =  Header("DiscoverScreen",props)
    let rooms


    

    let pseudo = "CowBeez"

    useEffect(() => { 

      async function dataLoad () {
        var rawData = await fetch(`http://192.168.10.145:3000/message/historique?token=${token}`);
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
            
        <ListItem containerStyle={{backgroundColor:"grey5"}}>
          <ListItem.Content style ={styles.profil}>
            <Image  style={styles.tinyLogo} source={{ uri: item.user.picture,}} />
            <Text style={styles.pseudo}>{item.user.pseudo}</Text> 
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
  else {
    return (

        <ImageBackground
          resizeMode="cover"
          style={styles.background}
          source={require('../assets/backgrounds/fond_buddy.png')}>
    {header}
          <View>
          <Text style={styles.text}>Liste des matchs</Text>
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

  tinyLogo: {
    
    width: 80,
    height: 80,
    borderRadius: 60,
    marginRight: 20,
  },
  
  text: {

    marginTop: 20,
    marginBottom: 40,

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },  
  
  pseudo: {

    fontWeight: "400",
    fontSize: 20,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },

  profil: {
    
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  }

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




