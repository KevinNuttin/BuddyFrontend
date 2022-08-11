import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, ScrollView, FlatList, Image, Pressable, Alert, ImageBackground} from "react-native";

import OffsetMiniButton from '../components/buttons/OffsetMiniButton';
import CardGame from '../components/cards/CardGame';
import SelectDropdown from 'react-native-select-dropdown';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
const noGame = ["Vous n'avez pas encore sélectionné de jeux"]
import Header from '../components/cards/Header';
import Tunnel from '../components/buttons/Tunnel';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function searchGames(props) {
    const [gameList, setGameList] = useState([]);
    const [wishGame, setWishGame] = useState([]);
    var header = Header("SignInScreen", props)
    var tunnel = Tunnel(1)
    var token = ""

    //* récupération du token du users pour pouvoir ajouter sa liste de jeux à son profil 
    AsyncStorage.getItem("users", function(error, data) {
      console.log(data);
      token = data
     });

    var confirmer = OffsetMiniButton("Confirmer", "MoodScreen",comfirmation)

   function createTwoButtonAlert  (){
    Alert.alert(
      "Tu n'as pas de jeux...",
      "Merci d'ajouter au moins un jeux  wesh!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );}

      async function comfirmation(redirection){
        if(wishGame.length > 0){
        props.navigation.navigate(redirection)

     
       const data = await fetch('http://192.168.10.132:3000/library/addgames', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `wishgame=${JSON.stringify(wishGame)}&token=${token}`
      }); 
        }else(createTwoButtonAlert())
          
      }

//** récupérer la liste des jeux au chargement de l'app via l'API depuis le back pour affichage sous forme de liste dans le front */

useEffect(() => {  
    async function dataLoad () {
    var rawResponse = await fetch('http://192.168.10.132:3000/library/games');
    var gamesListSearch = await rawResponse.json();
    setGameList(gamesListSearch)
    console.log("🚀 ~ file: SearchGames.js ~ line 43 ~ dataLoad ~ gamesListSearch", gamesListSearch)
    console.log("coucou")
}
    dataLoad();
    
    
}, 
[]);

//* Boucle dans la liste des jeux qui sont stockés dans un tableau, si le jeux est déjà présent dans la wishlist une variable déjà like se met à true

    var gamesList = gameList.map((game, i) => {
        var result = wishGame.find(element => element.name == game.name)
        var iLike = false
        if(result != undefined){
            iLike = true
        }
       
        //* au clique sur un jeux ajout dans un état du jeux à la wishlist de jeux avec le nom et l'image

        var handleClickAddGame = async (name, img, slug) => {
            if(wishGame.length < 5){
            setWishGame([...wishGame, {name:name,img:img, slug:slug}])
        }
          }

        //* au clique sur un jeux suppression dans un état du jeux à la wishlist de jeux avec le nom grâce à un filter

          var handleClickDeleteGame = (name, img) => {
            console.log("name",name);
            setWishGame(wishGame.filter(object => object.name != name))
          }

          //* retourne le composant CardGame qui est un jeu en lui passant via le reversedataflow les infos de nom, img, like pour mettre à jour la couleur de la carde si selection

     return( <CardGame key={i} GameLike={iLike} name={game.name} img={game.img} slug={game.slug} handleClickAddGameParent={handleClickAddGame} handleClickDeleteGameParent={handleClickDeleteGame}/>)
    })

    var gameWishList = wishGame.map((game, i) => {
        if(gameWishList){
      return(
        noGame
      )}else{
        return(
        <Text>{game.name}</Text>
        )
      }
    
    })
  
        const [dropdown, setDropdown] = useState("Vos jeux");
        const [selected, setSelected] = useState([]);

        const _renderItem = item => {
            return (
            <View style={styles.item} >
                <Text style={styles.textItem}>{item.name}</Text>
                <Image style={styles.icon} source={require('../assets/icons/trash_iconbuddy.png')} onPress={() => handleClickDeleteGame(item.name)} />
            </View>
            );
        }

    
    //* retourne l'affichage de la barre de recherche, la liste des jeux et le bouton de confirmation 
    return (
        <ImageBackground resizeMode= "cover" style = {styles.background} source= {require ("../assets/backgrounds/fond_buddy.png")}>
        {header}
        <View style={styles.container}>
            <Text style = {styles.text}>On joue à quoi ?</Text>
        <StatusBar style="auto" />
       {/*  <TextInput  style={styles.input} 
        placeholder='Your search'
        onChangeText={(val) => setGameName(val)}
    value={gameName}>
    </TextInput>*/}

                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={wishGame}
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Tes jeux"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.name);
                    setWishGame(wishGame.filter(obj => obj.name != item.name))
                    
                    }}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />

   
    <ScrollView style={{marginTop: 20, marginBottom: 20, }}>
        <View  style ={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: "center"}}>
       {gamesList}
        </View>
    </ScrollView>
    
<View style={{marginBottom: 50,}}>{confirmer}</View>
{tunnel}
       
      </View>
      </ImageBackground>)
      }

      const styles = StyleSheet.create({
        background : {
            height: "100%",

        },
        container: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          
        },
        text: {
            marginTop: 0,
            marginBottom: 0,
            fontWeight: "400",
            fontSize: 26,
            letterSpacing: 0.5,
            color: '#372C60',
            textAlign: "center",

        },
         input: {
         alignItems: 'center',
         borderColor: '#f194ff',
         borderWidth: 2,
         width: 250,
         height: 40,
         justifyContent: 'center',
        },
        GameName:{
            paddingLeft: 15, 
            marginTop:15,
            marginBottom: 15, 
            paddingBottom:15,
            fontSize: 16,
            borderBottomColor: '#f194ff',
            borderBottomWidth:1,
            height: 60,
        },
        image: {
            alignItems: 'center',
            width: 120,
            height: 160,
          },
          GameCard: { 
            flexDirection: 'row',
            width: 180,
            flexWrap: 'wrap',
       
          },
          CardContainer: { 
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
          dropdown: {
            width:120,
            marginTop: 20,
            textAlign:"center",
            justifyContent: "center"
        },
        icon: {
            marginRight: 5,
            width: 18,
            height: 18,
        },
        item: {
            paddingVertical: 17,
            paddingHorizontal: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        textItem: {
            flex: 1,
            fontSize: 16,
        },
        shadow: {
            shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
        },
      });