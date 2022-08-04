import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function Toggle(title, title2, onPress) {

    const [selected, setSelected] = useState(false);

    var onPress = ()=> {
        //if(selected === true){setSelected(true)} else {setSelected(false)}
        setSelected(true)
      }

    var colorButton

    if(selected === true){
        colorButton = {backgroundColor: "#DDABFE"}
    } else {
        colorButton = {backgroundColor: "#FFFFFF"}
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity  
                style={[styles.button, {colorButton}] } 
                onPress={onPress}>
                    <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={ styles.button } 
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