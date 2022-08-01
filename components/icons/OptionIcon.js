import React, { useState } from "react";
import { TouchableOpacity, View} from "react-native";

function optionIcon() {

    const [isPress, setIsPress] = useState(false)
    const onPress = () => setIsPress(true)

        return(

            <View style={{marginTop: 30, marginLeft: 30}}>
                <TouchableOpacity  
                    onPress={onPress}>
                        <Image 
                        style={{width: 25}}
                        source={require('../../assets/icons/option_inconBuddy.png')}
                        />
                </TouchableOpacity>
            </View>
        )
}

export default optionIcon