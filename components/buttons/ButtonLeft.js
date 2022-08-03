import React from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function buttonLeft(title, props) {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)
    const colorButton = ""

    if(!isPress){
        colorButton = "#FFA588"
    } else {
        colorButton = ""
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.button, {backgroudColor: {colorButton}} ]} 
                onPress={onPress}>
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

export default buttonLeft