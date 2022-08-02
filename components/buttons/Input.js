import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View} from "react-native";

function Input(label) {

    const [isFocus, setisFocus] = useState(false)
    const onFocus = () => setisFocus(true)

    if(isFocus === false) {
        return(

            <View style={styles.container}>
                <View style={styles.label}>{label}</View>
                <TextInput 
                    style={[styles.inputText, styles.input]} 
                    placeHolder=""
                    onFocus={onFocus}
                    keyboardType="phone-pad"
                    />
            </View>

        )
    } else {
        return(

            <View style={styles.container}>
                <View style={[styles.label, {fontWeight: 600}]}>{label}</View>
                <TextInput 
                style={[styles.inputText, styles.inputHold]} 
                placeHolder="" 
                //secureTextEntry={true}
                onFocus={onFocus}
                keyboardType="phone-pad"
                />
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

    input: {

        width: 230,
        height: 55,
        borderWidth: 1,
        borderColor: "#372C60",
        position: "relative",
        zIndex: -1,

    },

    inputHold: {

        width: 230,
        height: 55,
        borderWidth: 2,
        borderColor: "#372C60",
        position: "relative",
        zIndex: -1,

    },

    inputText: {

        fontFamily: "Biryani",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",

    },

    label: {

      width: 70,
      height: 15,
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
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