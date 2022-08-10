import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text} from "react-native";

function ButtonLeft(props) {

    const [isPress, setIsPress] = useState(true)

    var onPress = (platformName) => {

        props.handleClickChoosePlatformParent(platformName)

        if(isPress === false){
            
            setIsPress(true)

        } else {

            setIsPress(false)
        }
    }
    

    var colorButton

    if(isPress === false ) {
        colorButton = {...styles.button, backgroundColor: "#FFA588"}
    } else {
        colorButton = {...styles.button}
    }


    return(
            <TouchableOpacity 
                style={colorButton} 
                onPress={() => onPress(isPress)}>
                    <Text style={styles.buttonText}>{props.title}</Text>
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

export default ButtonLeft