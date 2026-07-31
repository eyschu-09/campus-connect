import { View,Text } from "react-native";
import { useEffect } from "react-native";
export default function EventScreen(){
    useEffectEvent(()=>{
        alert("hello eyschu");
    })
    return(
          <View>
            <Text>
                Event Screen
            </Text>
          </View>
    )   
}