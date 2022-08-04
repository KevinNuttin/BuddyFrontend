import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, ScrollView, FlatList, Image, Pressable} from "react-native";
import OffsetMiniButton from '../components/buttons/OffsetMiniButton';
import CardGame from '../components/cards/CardGame';
import { connect } from 'react-redux';

export default function searchGames(props) {
    const [gameList, setGameList] = useState([]);
    const [wishGame, setWishGame] = useState([]);
    const [gameName, setGameName] = useState([]);

    var fakeData =[ {
        "img": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "name": "Grand Theft Auto V",
      },
     {
        "img": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "name": "The Witcher 3: Wild Hunt",
      },
       {
        "img": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "name": "Portal 2",
      },
       {
        "img": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "name": "Tomb Raider (2013)",
      },
      {
        "img": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        "name": "Counter-Strike: Global Offensive",
      },
     {
        "img": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        "name": "The Elder Scrolls V: Skyrim",
      },
      {
        "img": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
        "name": "Left 4 Dead 2",
      },
       {
        "img": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        "name": "Portal",
      },
       {
        "img": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
        "name": "BioShock Infinite",
      },
      {
        "img": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        "name": "Life is Strange",
      },
       {
        "img": "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
        "name": "Borderlands 2",
      },
     {
        "img": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        "name": "Red Dead Redemption 2",
      },
      {
        "img": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        "name": "Half-Life 2",
      },
       {
        "img": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        "name": "BioShock",
      },
     {
        "img": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
        "name": "Limbo",
      },
      {
        "img": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
        "name": "DOOM (2016)",
      },
      {
        "img": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        "name": "Fallout 4",
      },
       {
        "img": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
        "name": "Destiny 2",
      },
      {
        "img": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        "name": "God of War",
      },
       {
        "img": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        "name": "Team Fortress 2",
      },
     {
        "img": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
        "name": "Grand Theft Auto V",
      },
      {
        "img": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        "name": "The Witcher 3: Wild Hunt",
      },
     {
        "img": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        "name": "Portal 2",
      },
       {
        "img": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        "name": "Tomb Raider (2013)",
      },
     ]
     

    var confirmer = OffsetMiniButton("Confirmer", "MoodScreen",comfirmation)

    function comfirmation(){
       
       console.log("clique");
      }

//** récupérer la liste des jeux au chargement de l'app via l'API depuis le back pour affichage sous forme de liste dans le front */

useEffect(() => {  
    async function dataLoad () {
    var rawResponse = await fetch('http://192.168.10.150:3000/library/games');
    var gamesListSearch = await rawResponse.json();
    setGameList(gamesListSearch)
}
    dataLoad();
    
}, 
[]);

//* Boucle dans le liste des jeux qui sont stockés dans un tableau, si le jeux est déjà présent dans la wishlist une variable déjà like se met à true

    var gamesList = fakeData.map((game, i) => {
        var result = wishGame.find(element => element.name == game.name)
        var iLike = false
        if(result != undefined){
            iLike = true
        }
       
        //* au clique sur un jeux ajout dans un état du jeux à la wishlist de jeux avec le nom et l'image
        var handleClickAddGame = async (name, img) => {
            setWishGame([...wishGame, {name:name,img:img}])
    
          }

        //* au clique sur un jeux suppression dans un état du jeux à la wishlist de jeux avec le nom grâce à un filter
          var handleClickDeleteGame = async (name, img) => {
            setWishGame(wishGame.filter(object => object.name != name))
          }

          //* retourne le composant CardGame qui est un jeu en lui passant via le reversedataflow les infos de nom, img, like pour mettre à jour la couleur de la carde si selection
     return( <CardGame key={i} GameLike={iLike} name={game.name} img={game.img} handleClickAddGameParent={handleClickAddGame} handleClickDeleteGameParent={handleClickDeleteGame}/>)
    })

    
    //* retourne l'affichage de la barre de recherche, la liste des jeux et le bouton de confirmation 
    return (<View style={styles.container}>
        <StatusBar style="auto" />

       
        <TextInput  style={styles.input}
        placeholder='Your search'
        onChangeText={(val) => setGameName(val)}
        value={gameName}>
    </TextInput>


    <ScrollView style={{marginTop: 50,}}>
        <View  style ={{flexDirection: 'row', flexWrap: 'wrap',}}>
       {gamesList}
        </View>
    </ScrollView>
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
         input: {
         backgroundColor: '#fff',
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
            width: 170,
            height: 170,
          },
          GameCard: { 
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 180,
            flexWrap: 'wrap',
            margin: 4,
          },
          CardContainer: { 
            flexDirection: 'row',
            flexWrap: 'wrap',
          }
      });