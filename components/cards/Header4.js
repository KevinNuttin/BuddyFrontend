import React from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";

import UserIcon from "../icons/UserIcon";
import OptionIcon from "../icons/OptionIcon";
import MessageIcon from "../icons/MessageIcon";
import MessageBadgeIcon from "../icons/MessageBadgeIcon";
import BackIcon from "../icons/BackIcon";

// Le header 4 a 3 icones pour la page ProfilScreen (dont l'option pour modifier les infos user)

function Header3(redirection, redirection2, redirection3, props) { 

    return(

        <View style={styles.container}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                 <BackIcon/>
            </TouchableOpacity>

            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection2)}}>
                    <OptionIcon/>
            </TouchableOpacity>

            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection3)}}>
                    <MessageBadgeIcon/>
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

export default Header3