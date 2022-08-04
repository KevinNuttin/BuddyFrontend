import React from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";

import UserIcon from "../icons/UserIcon";
import OptionIcon from "../icons/OptionIcon";
import MessageIcon from "../icons/MessageIcon";
import MessageBadgeIcon from "../icons/MessageBadgeIcon";

function Header2(redirection, props) {

    return(
        <View style={styles.container}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <UserIcon/>
            </TouchableOpacity>

            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <MessageIcon/>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    
    container: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        marginLeft: 40,
        marginRight: 40,
        height: 60,

    },

})

export default Header2