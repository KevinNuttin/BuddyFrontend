import React from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function OffsetMiniButton(title, redirection, onPress) {

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => {onPress(redirection)}}>
                    <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
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
        marginBottom: 60,

    },

    buttonText: {

        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",
        marginTop: 7,

    },

})

export default OffsetMiniButton