import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View} from "react-native";

function OffsetMiniButton(props) {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)

    if(isPress === false) {
        return(

            <View style={styles.container}>
                <Pressable 
                    style={[styles.button, styles.shadow]} 
                    onPress={onPress}>
                        <Text style={styles.buttonText}>{props.titleButton}</Text>
                </Pressable>
            </View>

        )
    } else {
        return(
            <View style={styles.container}>
                <Pressable 
                    style={[styles.button, styles.shadow]} 
                    onPress={onPress}>
                        <Text style={styles.buttonText}>{props.titleButton}</Text>
                </Pressable>
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

        width: 135,
        height: 40,
        borderWidth: 1,
        borderColor: "#372C60",
        position: "relative",


    },

    shadow: {
        shadowColor: "#DDABFE",
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
        marginTop: 7,

    },

})

export default OffsetMiniButton