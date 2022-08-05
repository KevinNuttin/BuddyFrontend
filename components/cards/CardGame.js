import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Button, ScrollView, FlatList, Image, Pressable} from "react-native";



function CardGame(props) {

const [gameName, setGameName] = useState('');
const [gameSelected, setGameSelected] = useState(false);

var SelectColor ={...styles.GameCard, borderWidth: 2, borderColor: '#f194ff'}

  function GameSelectColor(name, img) {
    console.log("click");
    if(props.GameLike == false) {
    props.handleClickAddGameParent(name, img)
    //TODO ajouter la route pour ajouter un jeux en DB
    setGameSelected(true)
    } else{
        props.handleClickDeleteGameParent(name, img)
        //TODO ajouter la route pour supprimer la clé étrangère du jeux en DB
    setGameSelected(false)
    }
}

if(props.GameLike){
    SelectColor ={...styles.GameCard, backgroundColor: "#FDEDE6", borderRadius: 20}
}else{
    SelectColor ={...styles.GameCard}
}


    return(
        <Pressable onPress={() => GameSelectColor(props.name,props.img)} >
        <View style= {SelectColor}>
        <Text style={styles.GameName}>{props.name}</Text>
        <Image source={{ uri: `${props.img}`}} style={styles.image }></Image>
        </View>
        </Pressable>
        )   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100, // A virer après les tests recherche de jeux
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
        alignItems: 'center',
        textAlign: 'center',
        marginTop:15,
        marginBottom: 15, 
        paddingBottom:15,
        fontSize: 16,
        height: 60,
 
    },
    image: {
        width: 160,
        height: 170,
        borderRadius: 20,
        marginBottom:-40,
        
      },
      GameCard: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 265,
        flexWrap: 'wrap',
        margin: 4,
        borderRadius: 5,
      },
      CardContainer: { 
        flexDirection: 'row',
        flexWrap: 'wrap',
      }
  });

  export default CardGame;