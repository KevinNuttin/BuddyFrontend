import React, {useState} from 'react';
import { StyleSheet, View, Text,  Image, Pressable} from "react-native";

function CardGame(props) {

var SelectColor ={...styles.GameCard, borderWidth: 2, borderColor: '#f194ff'}


  function GameSelectColor(name, img, slug) {   // au click appelle la fonction parent avec en param le like pour récupérer les infos du jeux et les envoyer au parent
    if(props.GameLike == false) {
    props.handleClickAddGameParent(name, img, slug)  // Reverse Data Flow appel de la fonction pour l'écran SearchGames

    } else{
    props.handleClickDeleteGameParent(name, img, slug)  // Reverse Data Flow appel de la fonction pour l'écran SearchGames

    }
}

if(props.GameLike){    // au click change la couleur du background si GameLike existe depuis le parent 
    SelectColor ={...styles.GameCard, backgroundColor: "#FDEDE6", borderRadius: 20}
}else{
    SelectColor ={...styles.GameCard}
}


    return(


        <Pressable onPress={() => GameSelectColor(props.name,props.img, props.slug)} > {/* Slug: nom du jeu sous format particulier pour la requete API*/}
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