import React, {useState} from "react";
import { StyleSheet, TouchableOpacity, Text, View} from "react-native";

function Toggle(props) {
    
    // Etat pour changer la couleur du bouton au click
    const [isPress, setIsPress] = useState(true)    

    var onPress = (moodName)=> {

        if( isPress === false ){
            setIsPress(true)
            // Reverse Data flow "moodName" au premier click envoi le nom
            props.handleClickChooseMoodParent(moodName) 

        } else {
            setIsPress(false)
            // Reverse Data flow "moodName" au second click reset le nom
            props.handleClickChooseMoodParent(null)
        }
    }

    // Lorsque le click se fait sur un button, il change de couleur et le second est reset
    var colorButtonLeft
    var colorButtonRight

    if(isPress === true){
        colorButtonLeft = {...styles.button, backgroundColor: "#FFA588"}
        colorButtonRight = {...styles.button}
    } else {
        colorButtonRight = {...styles.button, backgroundColor: "#DDABFE"}
        colorButtonLeft = {...styles.button}
    }

    return(

        <View style={styles.container}>
            <TouchableOpacity
                style={colorButtonLeft}
                onPress={() => onPress(isPress)}>
                    <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={colorButtonRight} 
                onPress={() => onPress(isPress)}>
                    <Text style={styles.buttonText}>{props.title2}</Text>
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