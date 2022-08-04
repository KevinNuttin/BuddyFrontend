import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View} from "react-native";

function Toggle(title, title2, props) {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)
    //const colorButton = ""

    // if(!isPress){
    //     colorButton = "#DDABFE"
    // } else {
    //     colorButton = ""
    // }

    return(
        <View style={styles.container}>
            <Pressable 
                style={styles.button } 
                onPress={onPress}>
                    <Text style={styles.buttonText}>{title}</Text>
            </Pressable>

            <Pressable 
                style={ styles.button } 
                onPress={onPress}>
                    <Text style={styles.buttonText}>{title2}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    
    container: {

        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",

    },

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

export default Toggle