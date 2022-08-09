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
  const [avatar, setAvatar] = useState(require("../assets/avatars/avatarDefault.png"))

  var ProfilPic = ProfilPicture(avatar);
  var header = Header2("EditScreen","EditScreen",props)
  var pictures = [
  require("../assets/avatars/Group.png"),
  require("../assets/avatars/Group2.png"),
  require("../assets/avatars/Group3.png"),
  require("../assets/avatars/Group4.png"),
  require("../assets/avatars/Group5.png"),
  require("../assets/avatars/Group6.png"),
  require("../assets/avatars/Group7.png"),
  require("../assets/avatars/Group8.png"),
  require("../assets/avatars/Group9.png"),
  require("../assets/avatars/Group10.png")
    
  ]

  function swap(source){
    console.log("coucou");
    setAvatar(source)
    }

  return(

<ImageBackground
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/backgrounds/fond_buddy.png")}>
      {header}
      <View style={styles.container}>
      <Text style={styles.text}>Choisi ton Avatar!</Text>
      <TouchableOpacity >
      {ProfilPic}
      </TouchableOpacity>
      </View>
  
    <ScrollView horizontal={true} style={{marginTop: 250 }}>
        <View  style ={{flexDirection: 'row', flexWrap: 'wrap'}}>
  <Pressable onPress={() => swap(pictures[0])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[0]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[1])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[1]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[2])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[2]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[3])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[3]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[4])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[4]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[5])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[5]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[6])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[6]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[7])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[7]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[8])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[8]}></Image>
  </Pressable>

  <Pressable onPress={() => swap(pictures[9])} >
  <Image  style = {{marginLeft: 10, borderRadius: 360}} source={pictures[9]}></Image>
  </Pressable>
  
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
