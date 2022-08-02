import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button} from "react-native";



 //** requett au Backend en post pour chercher un jeu à partir de l'input  */

     // TODO: ajouter un useEffect qui appel la fonction lorsqu'il y a un changement de l'input 
    // TODO: ajouter dynamiquement le résultat de l'input au body de la request

    /*await fetch('http://localhost:3000/library/games', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'gameName=Tomb'
    });*/

    //** récupérer la liste des jeux de la recherche depuis le back pour affichage sous forme de liste dans le front */
   /* var rawResponse = await fetch('http://localhost:3000/library/games');
    var response = await rawResponse.json();
    console.log(response); */
    
    useEffect(() => { 
        socket.on('sendMessageFromBack', (messageData)=> {
          setListMessage([...listmessage,messageData])
        });  
      }, [listmessage]);
   async function searchGamesInput() {

   }

export default function searchGames() {
    const [message, setMessage] = useState('');
   

    return (<View style={styles.container}>
        <Text>SearchGames</Text>
        <StatusBar style="auto" />
        <TextInput  
        placeholder='Your message'
        onChangeText={(val) => setMessage(val)}
        value={message}>
    </TextInput>
    <Button 
              title="Send"
              buttonStyle={{backgroundColor: "#eb4d4b"}}
              type="solid"
              onPress={()=> {}}             
          />
  
      </View>)
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });