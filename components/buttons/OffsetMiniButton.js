import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View} from "react-native";

function OffsetMiniButton(text) {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)

    if(isPress === false) {
        return(

            <View style={styles.container}>
                <Pressable 
                    style={styles.button} 
                    onPress={onPress}>
                        <Text style={styles.buttonText}>{text}</Text>
                </Pressable>
                <View style={styles.buttonBackgroundOff}/>
            </View>

        )
    } else {
        return(
            <View style={styles.container}>
                <Pressable 
                    style={styles.button} 
                    onPress={onPress}>
                        <Text style={[styles.buttonText, {fontWeight: "600"}]}>{text}</Text>
                </Pressable>
                <View style={styles.buttonBackgroundOn}/>
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

        width: 135,
        height: 40,
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
        marginTop: 7,

    },

    buttonBackgroundOff:{
      
      width: 135,
      height: 40,
      backgroundColor: "#DDABFE",
      position: "absolute",
      marginTop: 15,
      marginLeft: 15,
      zIndex: -1,

    },

    buttonBackgroundOn:{
      
      width: 135,
      height: 40,
      backgroundColor: "#DDABFE",
      position: "absolute",
      zIndex: -1,

    },

})

export default OffsetMiniButton