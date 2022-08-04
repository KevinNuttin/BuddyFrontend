import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function Toggle(title, title2, onPress) {

    const [selectedRight, setSelectedRight] = useState(true);
    const [selectedLeft, setSelectedLeft] = useState(false);

    var onPress = ()=> {
        if(selectedRight === false) {
            setSelectedRight(true) 
            setSelectedLeft(false)
        } else {
            setSelectedRight(false)
            setSelectedLeft(true)
      }}

    var colorButton
    var colorButton2

    if(selectedRight === true ){
        colorButton = {...styles.button, backgroundColor: "#FFA588"}
    } else {
        colorButton = {...styles.button}
    }

    if(selectedLeft === true ){

        colorButton2 = {...styles.button, backgroundColor: "#DDABFE"}
    } else {
        colorButton2 = {...styles.button}
    }

    return(

        <View style={styles.container}>
            <TouchableOpacity  
                style={colorButton}
                onPress={onPress}>
                    <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={colorButton2} 
                onPress={onPress}>
                    <Text style={styles.buttonText}>{title2}</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    
    container: {

        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },

    button: {

        width: 145,
        height: 40,
        borderWidth: 1,
        borderColor: "#372C60",
    },

    buttonText: {

        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",
        marginTop: 6,

    },

})

export default Toggle