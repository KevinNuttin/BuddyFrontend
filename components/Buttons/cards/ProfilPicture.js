import React from "react";
import { StyleSheet, Image, View} from "react-native";

function profilPicture(color) {

// Le paramètre de changement de couleur doit être ajouté
    var color1 = "#DDABFE"
    var color2 = "#FFA588"

    return(

        <View style={styles.container}>
            <Image 
            style={styles.picture}
            source={require('../../../assets/pp_default.png')}
            />
            <View style={[styles.background, {backgroundColor: {color}}]}/>
        </View>

    )
}


const styles = StyleSheet.create({
    
  container: {

    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,

},

picture: {

    width: 116,
    height: 116,
    borderWidth: 1,
    borderColor: "#372C60",
    transform: [{ rotate: "45deg" }],
    position: "relative",

},

background: {
  
    width: 116,
    height: 116,
    backgroundColor: "#DDABFE",
    transform: [{ rotate: "45deg" }],
    position: "absolute",
    marginRight: -30,
    zIndex: -1,

  },

})

export default profilPicture