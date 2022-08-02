import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button} from "react-native";

// Import du bouton confirmer qui redirect vers la page mood 
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'

export default function SearchGames(props) {

    var confirmer = OffsetMiniButton("Confirmer", "MoodScreen",props)

    const [message, setMessage] = useState('');

  //** request au Backend en post pour chercher un jeu à partir de l'input à chaque changement useEffect pour envoyer un backend le nouvel input  */

     // TODO: ajouter un useEffect qui appel la fonction lorsqu'il y a un changement de l'input 
    // TODO: ajouter dynamiquement le résultat de l'input au body de la request
    useEffect(() => { 
        async function inputSearchGame() {
    await fetch('http://localhost:3000/library/games', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: 'gameName=Tomb'
    });

    //** récupérer la liste des jeux de la recherche depuis le back pour affichage sous forme de liste dans le front */
   var rawResponse = await fetch('http://localhost:3000/library/games');
    var response = await rawResponse.json();
    console.log(response);
}

      }, [message]);

      async function inputSearch() {
        await fetch('http://localhost:3000/library/games', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: 'gameName=Tomb'
        });
        var rawResponse = await fetch('http://localhost:3000/library/games');
         var response = await rawResponse.json();
        console.log(response);
    }

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
              onPress={()=> {inputSearch}}             
          />
        {confirmer}
      </View>)
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100, // A virer après les tests recherche de jeux
        },
      });