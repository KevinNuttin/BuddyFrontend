import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

// Composant Bouton de redirection pour la HomeScreen

function OffsetButton(title , redirection, onPress) {

//    Mecanique qui permet de centrer le rectangle au bouton (peu lisible avant redirection ???)

    const [pressed, setPressed] = useState(false)

    var isPress = () => {

        if(pressed === false){
            
            setPressed(true)

        } else {

            setPressed(false)
        }
    }

    var positionButton

    if(pressed === true ) {
        positionButton = {...styles.rectangle, top: -55, left: 0}
        
    } else {
        positionButton = {...styles.rectangle}
    }

    return(

        <View>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                    onPress(redirection)
                    isPress(true)
                    {/*isPress(true) va avec la mecanique du rectangle*/}
                }}>
                    <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            <View style={positionButton}/>
        </View>

    )
}

const styles = StyleSheet.create({

    button: {

        width: 225,
        height: 55,
        borderWidth: 1,
        borderColor: "#372C60",
        padding: 16,
        zIndex: 100,

    },

    buttonText: {

        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",
        zIndex: 50,

    },

    rectangle: {

        width: 225,
        height: 55,
        backgroundColor: "#EACBFF",
        top: -45,
        left: 10,
    }

})

export default OffsetButton