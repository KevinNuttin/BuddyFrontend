import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function ButtonRight(title, onPress) {

    const [isPress, setIsPress] = useState(false)

    var onPress = () => {

        if(isPress === false){
            
            setIsPress(true)

        } else {

            setIsPress(false)
        }
    }
    

    var colorButton

    if(isPress === true ) {
        colorButton = {...styles.button, backgroundColor: "#DDABFE"}
    } else {
        colorButton = {...styles.button}
    }

    return(
            <TouchableOpacity 
                style={colorButton} 
                onPress={onPress}>
                    <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {

        width: 145,
        height: 40,
        borderWidth: 1,
        borderColor: "#372C60",
        marginBottom: 60,

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

export default ButtonRight