import React, {useState, useEffect} from "react"
import { StyleSheet, Text, View, ImageBackground} from "react-native"


import Header2 from "../components/cards/Header2"
import OffsetMiniButton from '../components/buttons/OffsetMiniButton'
import ProfilPicture from "../components/cards/ProfilPicture"
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Page du match

// Récupération du token dans le local storage
var token = '';
AsyncStorage.getItem("users", function(error, data) {

   token = data
 });

function MoodScreen(props) {

  const [pseudo, setPseudo] = useState(''); // set du pseudo du match
  const [picture1, set1] = useState('');  // set de la pp user
  const [picture2, set2] = useState('');  // set de la pp du match

  useEffect(() => {  // Récupération du pseudo et de la PP match
    async function loadData() {
    const message = await fetch('https://buddygaming.herokuapp.com/users/getmyprofil', {
            method: "PUT",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `token=${props.match}`,  
    })
          var json = await message.json(); 
          console.log(json);
          setPseudo(json.user.pseudo)
          set1(json.user.picture)
    }

        
        loadData()

        async function loadData2() {  // Récupération de la PP du user
          const message = await fetch('https://buddygaming.herokuapp.com/users/getmyprofil', {
                  method: "PUT",
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                  body: `token=${token}`,  
                })
                var json = await message.json(); 
                set2(json.user.picture)
              }
              loadData2()

  }, []);


  // Ici on parametre les composants importés
  var header = Header2("ProfilScreen", "RoomScreen", props)
  var message = OffsetMiniButton("Message", "RoomScreen", goDiscover)
  var swipe = OffsetMiniButton("swipe", "DiscoverScreen", goDiscover)

  function goDiscover(redirection){
    props.navigation.navigate(redirection); 
  }

  return (

    <ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require('../assets/backgrounds/fond_buddy.png')}>

      {header}

      <View style={styles.container}>

        <View style={styles.profils}>
        {ProfilPicture(picture2)}
        {ProfilPicture(picture1)}
        </View>

        <Text style={styles.matchText}>I'ts a MATCH !</Text>
        <Text style={styles.pseudoText}>With {pseudo}{"\n\n\n"}╰(*°▽°*)╯</Text>

        {message}
        {swipe}

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  background: {

    height: "100%",
  },

  container: {

    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },

  profils: {

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -100,
    marginLeft: "10%",
    marginBottom: 60,
  },

  matchText: {

    fontWeight: "800",
    fontSize: 36,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },

  pseudoText: {

    fontWeight: "400",
    fontSize: 18,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
    marginBottom: 80,
  },

  input: {
    width : 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
},

});




function mapStateToProps(state) {
  return { match: state.match };
}



export default connect(
  mapStateToProps,
  null
)(MoodScreen);
