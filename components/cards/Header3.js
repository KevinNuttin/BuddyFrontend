import React from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";

import UserIcon from "../icons/UserIcon";
import OptionIcon from "../icons/OptionIcon";
import MessageIcon from "../icons/MessageIcon";
import MessageBadgeIcon from "../icons/MessageBadgeIcon";

function Header2(redirection,redirection2, redirection3, props) {

    return(
        <View style={styles.container}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <UserIcon/>
            </TouchableOpacity>

            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection2)}}>
                    <MessageIcon/>
            </TouchableOpacity>

            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection3)}}>
                    <OptionIcon/>
            </TouchableOpacity>


        </View>

        
    )
}

const styles = StyleSheet.create({
    
    container: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
    },

})

export default Header2