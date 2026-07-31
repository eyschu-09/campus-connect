import {StyleSheet,View,Text, TextInput,Button} from 'react-native';
import {useState} from 'react';
export default function StudentForm(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    function handleLogin(){
        alert("login successful")
    }
    return(
          <View>
          <Text>student registration</Text>
          <TextInput
           placeholder="enter student name:"
           value={username}
           onChangeText={setUsername}
           />
           <TextInput 
           placeholder="password"
           value={password}
           onChangeText={setPassword}
           />
           <Text>username:{username}</Text>
           <Text>password:{password}</Text>
           <Button title="Login" onPress={handleLogin}/>
          </View>
    )
}