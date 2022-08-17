import React from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function OffsetMiniButton(title, redirection, onPress) {    // Voir commentaires OffsetButton

    return(

        <View>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                    onPress(redirection)
                }}><Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            
            <View style={styles.rectangle}/>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {

        width: 135,
        height: 40,
        borderWidth: 1,
        borderColor: "#372C60",
        padding: 6,
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

        width: 135,
        height: 40,
        backgroundColor: "#EACBFF",
        top: -35,
        left: 5,
    }

})

export default OffsetMiniButton