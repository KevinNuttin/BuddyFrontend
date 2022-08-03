import React from "react";
import { TouchableOpacity, View} from "react-native";

function userIcon() {

    return(

        <View style={{marginTop: 60, marginRight: "75%"}}>
            <TouchableOpacity  
                onPress={() => {props.navigation.navigate(redirection)}}>
                    <Image 
                    style={{width: 25}}
                    source={require('../../assets/icons/user_iconbuddy.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default userIcon