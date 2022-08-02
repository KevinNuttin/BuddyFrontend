import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function offsetButton(title , redirection, props) {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)

    

    if(isPress === false) {
        return(

            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.button, styles.shadow]} 
                    onPress={() => {props.navigation.navigate(redirection);
                    }
                    }>
                        <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    } else {
        return(

            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.button, styles.shadow]} 
                    onPress={onPress}>
                        <Text style={styles.buttonText}>{name}</Text>
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

    },

    button: {

        width: 255,
        height: 55,
        borderWidth: 1,
        borderColor: "#372C60",
        marginBottom: 60,

    },

    shadow: {
        shadowColor: "#FDEBE6",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 1,
        shadowRadius: 0,
      },

    buttonText: {

        fontFamily: "Biryani",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 0.5,
        color: "#372C60",
        textAlign: "center",
        marginTop: 13,

    },

})

export default offsetButton