import React from "react";
import { TouchableOpacity, View} from "react-native";

function optionIcon() {

    return(

        <View style={{marginTop: 60, marginLeft: "75%"}}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <Image 
                    style={{width: 25}}
                    source={require('../../assets/icons/option_iconbuddy.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default optionIcon