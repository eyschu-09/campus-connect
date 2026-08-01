import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useState,useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=>{checkLogin()
},[]);
  const checkLogin = async ()=>{
    const status=await AsyncStorage.getItem("IsLoggedIn");
    if(status==="true"){
      navigation.replace("Main")
    }
  }

  async function handleLogin() {
    //hardcode the credentials
    const validEmail="student@gmail.com"
    const validPassword="123456"
    if(email===validEmail && password===validPassword){
      await AsyncStorage.setItem(
        "IsLoggedIn",
        "true",
      )
        alert("Login successful");
        navigation.navigate("Main");

    }
    else{
        alert("invalid email or password")
    }
   
    
  }

  return (
    <View style={styles.container}>
      <Text>Campus Connect</Text>
      <Text>Student Login</Text>

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button
        title="Login"
        onPress={handleLogin}
      />

      <Button
        title="Back to Register"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF6FF",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});