
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput,ScrollView,TouchableOpacity, Image} from "react-native"
import { ListItem,  } from 'react-native-elements';
import { connect } from 'react-redux';
import Header from "../components/cards/Header"
import AsyncStorage from '@react-native-async-storage/async-storage';

let token=''; // récupération du token 
AsyncStorage.getItem("users", function(error, data) {
    token = data
   });

// page des conversations

function ChatScreen(props) {

    const [channel, setChannel] = useState([]); // liste des conversations du user
    const header =  Header("DiscoverScreen",props)
    let rooms
    let pseudo = props.pseudo // récupération du pseudo du user

    useEffect(() => { 

      async function dataLoad () {
        var rawData = await fetch(`http://192.168.1.21:3000/message/historique?token=${token}`); // récupération de la liste des conversations
         rooms = await rawData.json()
        
         let table = [];
         for(let i = 0 ; i< rooms.message.length; i++){
            let user;
            if(pseudo == rooms.message[i].user1.pseudo){
                 user = rooms.message[i].user2
            }else {
                 user = rooms.message[i].user1
            }
            table.push({user: user , id: rooms.message[i]._id}) 
        }
    
        setChannel(table) // tableau de toutes les conversations
    }
    dataLoad();
   
      }, []);
   
      if(!rooms){ // verification des conversations
  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>
        <Text style={styles.text}>Liste des matchs</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width : 350, height: 500, }}>
      <View>

      {
        channel.map((item, i) => ( // affichage des conversations

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
  else { // si aucune conversations n'est trouvées
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

// syntaxe du redux
function mapStateToProps(state) {
  return { socket: state.socket, pseudo : state.pseudo };
}


function mapDispatchToProps(dispatch) {
    return {
      saveRoom: function (room) {
        dispatch({ type: 'addRoom', room }); // sauvegarde de la room à utiliser dans la chatScreen
      },
    };
  }



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen);




