import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";

function gameCard(pictureGame) {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)

    if(isPress === false) {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.picture}
                    onPress={onPress}>
                    <Image source={pictureGame}/>
                </TouchableOpacity>
            </View>

        )
    } else {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.pictureSelected}
                    onPress={onPress}>
                    <Image source={pictureGame}/>
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
        flexWrap: "wrap",
        marginRight: 10,
        marginBottom: 10,

},

    picture: {

        width: 116,
        height: 124,
        borderWidth: 1,
        borderColor: "#372C60",

},

    pictureSelected: {

        width: 116,
        height: 124,
        borderWidth: 4,
        borderColor: "#FFA588",

},

})

export default gameCard