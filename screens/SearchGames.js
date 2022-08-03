import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, ScrollView} from "react-native";

// Import du bouton confirmer qui redirect vers la page mood 
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'


    const [gameName, setGameName] = useState('');
    const [gameList, setGameList] = useState([]);

export default function SearchGames(props) {

    var confirmer = OffsetMiniButton("Confirmer", "MoodScreen",props)


  //** request au Backend en post pour chercher un jeu à partir de l'input à chaque changement useEffect pour envoyer un backend le nouvel input  */

     // TODO: ajouter un useEffect qui appel la fonction lorsqu'il y a un changement de l'input 
    // TODO: ajouter dynamiquement le résultat de l'input au body de la request
    useEffect(() => { 
        async function inputSearchGame() {
    await fetch('http://192.168.10.150:3000/library/games', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `gameName=${gameName}`
    });

    //** récupérer la liste des jeux de la recherche depuis le back pour affichage sous forme de liste dans le front */
    var rawResponse = await fetch('http://192.168.10.150:3000/library/showgames');
    var gamesListSearch = await rawResponse.json();
    setGameList([])
    setGameList(gamesListSearch)
    
}
inputSearchGame();
      }, [gameName]);
      
      var games = gameList.map((name, i) => {
        return(
            <Text key={i}>
                {name}
            </Text>
        )
      })
console.log("gamelist",gameList);

    return (<View style={styles.container}>
        <StatusBar style="auto" />
        <TextInput  style={styles.input}
        placeholder='Your search'
        onChangeText={(val) => setGameName(val)}
        value={gameName}>
    </TextInput>
    <ScrollView style={{flex:1, marginTop: 50}}>
    {games}
    </ScrollView>
  
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
         input: {
         backgroundColor: '#fff',
         alignItems: 'center',
         borderColor: '#f194ff',
         borderWidth: 2,
         width: 250,
         height: 40,
         justifyContent: 'center',
        }
      });
    