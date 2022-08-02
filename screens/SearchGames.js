import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from "react-native";

  

export default function searchGames() {
    const [gameName, setGameName] = useState('');

  //** request au Backend en post pour chercher un jeu à partir de l'input à chaque changement useEffect pour envoyer un backend le nouvel input  */

     // TODO: ajouter un useEffect qui appel la fonction lorsqu'il y a un changement de l'input 
    // TODO: ajouter dynamiquement le résultat de l'input au body de la request
    useEffect(() => { 
        console.log("coucou");
        async function inputSearchGame() {
    await fetch('http://172.20.10.3:3000/library/games', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `gameName=`+{gameName}
    });

    //** récupérer la liste des jeux de la recherche depuis le back pour affichage sous forme de liste dans le front */

}
inputSearchGame();
      }, [gameName]);

      async function inputSearch() {
        await fetch('http://172.20.10.3:3000/library/games', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: 'gameName=Tomb'
        });
        var rawResponse = await fetch('http://localhost:3000/library/games');
         var gamesListSearch = await rawResponse.json();
        console.log(gamesListSearch);
    }

    return (<View style={styles.container}>
        <Text>SearchGames</Text>
        <StatusBar style="auto" />
        <TextInput  
        placeholder='Your search'
        onChangeText={(val) => setGameName(val)}
        value={gameName}>
    </TextInput>
    <Button 
              title="Send"
              buttonStyle={{backgroundColor: "#eb4d4b"}}
              type="solid"
              onPress={()=> {inputSearch}}             
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



