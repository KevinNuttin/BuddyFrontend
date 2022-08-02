import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View} from "react-native";

function offsetButton(props) {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)

// Le paramètre de changement de couleur doit être ajouté
    const colorButton = selectedButton ? "#FDEBE6" : "#DDABFE"

    if(isPress === false) {
        return(

            <View style={styles.container}>
                <Pressable 
                    style={styles.button} 
                    onPress={onPress}>
                        <Text style={styles.buttonText}>{props.titleButton}</Text>
                </Pressable>
                <View style={[styles.buttonBackgroundOff, {backgroundColor: {colorButton}}]}/>
            </View>

        )
    } else {
        return(
            <View style={styles.container}>
                <Pressable 
                    style={styles.button} 
                    onPress={onPress}>
                        <Text style={[styles.buttonText, {fontWeight: "600"}]}>{props.title}</Text>
                </Pressable>
                <View style={[styles.buttonBackgroundOn, {backgroundColor: {colorButton}}]}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },

    button: {

        width: 255,
        height: 55,
        borderWidth: 1,
        borderColor: "#372C60",
        position: "relative",


    },

    buttonText: {

        fontFamily: "Biryani",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",
        marginTop: 13,

    },

    buttonBackgroundOff:{
      
      width: 255,
      height: 55,
      backgroundColor: "#FDEBE6",
      position: "absolute",
      marginTop: 25,
      marginLeft: 25,
      zIndex: -1,

    },

    buttonBackgroundOn:{
      
      width: 255,
      height: 55,
      backgroundColor: "#FDEBE6",
      position: "absolute",
      zIndex: -1,

    },

})

export default offsetButton