import {
  StyleSheet,
  Text,
  View,
  Title,
  Button,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Icon,
  TouchableOpacity
} from "react-native";

import React, { useState, useEffect } from "react";
import ProfilPicture from "../components/cards/ProfilPicture";
import Header2 from "../components/cards/Header2";
import profilPicture from "../components/cards/ProfilPicture";


export default function EditPictureScreen(props) {

  var picture = ["../assets/avatars/avatar1.png",
  "../assets/avatars/avatar2.png",
  "../assets/avatars/avatar3.png",
  "../assets/avatars/avatar4.png",
  "../assets/avatars/avatar5.png",
  "../assets/avatars/avatar6.png"]

function swap(photo){

setAvatar(photo)

}


  var ProfilPic = ProfilPicture(null, avatar);
  var header = Header2("EditScreen","EditScreen",props)

  var [avatar , setAvatar] = useState("../assets/avatars/avatarDefault.png")

  var onPress = () => {
    setAvatar("../assets/avatars/avatar1.png")
  }


  return(

<ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/backgrounds/fond_buddy.png")}>

      {header}
  

      <View style={styles.container}>
      <Text style={styles.text}>Choisi ton Avatar!</Text>
      <TouchableOpacity>
      {ProfilPic}
      </TouchableOpacity>
      </View>


    <ScrollView horizontal={true} style={{marginTop: 250 }}>
        <View  style ={{flexDirection: 'row', flexWrap: 'wrap'}}>
          
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={uri: ("https://res.cloudinary.com/ducivlnzm/image/upload/v1659973257/avatar6_xzkk0z.png")}
          onPress={swap(picture[5])}></Image>
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={require("https://res.cloudinary.com/ducivlnzm/image/upload/v1659973257/avatar4_cy4e1b.png")}></Image>
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={require("https://res.cloudinary.com/ducivlnzm/image/upload/v1659973256/avatar2_omfpy8.png")}></Image>
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={require(picture[2])}></Image>
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={require(picture[3])}></Image>
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={require(picture[4])}></Image>

{/* be able to put the picture as the profil pic if selected*/}

        </View>
    </ScrollView>

    </ImageBackground>
)}

const styles = StyleSheet.create({
    
  background: {
  
    height: "100%",
  },

  container: {
    
    marginTop: 60,
 

    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
  

    fontWeight: "400",
    fontSize: 26,
    letterSpacing: 0.5,
    color: "#372C60",
    textAlign: "center",
  },

})
