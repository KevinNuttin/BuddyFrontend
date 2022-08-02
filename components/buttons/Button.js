import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function button(props) {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)

// Le paramètre de changement de couleur doit être ajouté
//const colorButton = selectedButton ? "#FDEBE6" : "#DDABFE"

    if(isPress === false) {
        return(

            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={onPress}>
                        <Text style={styles.buttonText}>{props.titleButton}</Text>
                </TouchableOpacity>
            </View>

        )
    } else {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.button, {backgroundColor:{colorButton}}]} 
                    onPress={onPress}>
                        <Text style={[styles.buttonText, {fontWeight: 600}]}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",

    },

    button: {

        width: 145,
        height: 40,
        borderWidth: 1,
        borderColor: "#372C60",

    },

    buttonText: {

        fontFamily: "Biryani",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",
        marginTop: 6,

    },

})

export default button