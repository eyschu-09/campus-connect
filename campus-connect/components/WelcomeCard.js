import { StyleSheet, Text, View,Button } from 'react-native';
import {useState} from "react";
export default function WelcomeCard(){
//    const addition =(a,b)=>{
//     return a+b
//    }
   const [name,setName]=useState("eyschu");
   const [department,setdepartment]=useState("cse");
   
    return(
        <View style={styles.card}>
            <Text 
            style={styles.title} >
                welcome {name}
            </Text>
            {/* <Text>
                department:{department}
            </Text> */}
            <Button title="change name"
                onPress={() =>setName("eyschu")}
            />
            <Button title="change department" onPress={()=>setName("cse")}/>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        backgroundColor:"#D2691E",
        padding:40,
        borderRadius:20,
        margin:30,

    },
    title:{
        fontSize:10,
        fontWeight:"bold",
    },

});

