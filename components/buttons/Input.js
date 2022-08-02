import React, { useState } from "react";
import { StyleSheet, TextInput, View} from "react-native";

function Input(label, placeholder, props) {

    const [text, setText] = useState('');

    // configurer les placeholders en fonction des types d'input

    return(

        <View style={styles.container}>
            <View style={styles.label}>{label}</View>
            <TextInput 
                style={[styles.inputText, styles.input]} 
                onChangeText={(value) => setText(value)}
                value={text}
                keyboardType="phone-pad"
                //secureTextEntry={true}
                />
        </View>

    )
}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },

    input: {

        width: 230,
        height: 55,
        borderWidth: 1,
        borderColor: "#372C60",
        marginBottom:20,
        position: "relative",
        zIndex: -1,

    },

    inputText: {

        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",

    },

    label: {

      width: 70,
      height: 15,

      fontWeight: "500",
      fontSize: 12,
      letterSpacing: 0.5,
      textAlign: "center",
      color: "#372C60",

      position: "absolute",
      marginTop: -54,
      marginLeft: -145,
      backgroundColor: "#ffffff",

    }

})

export default Input