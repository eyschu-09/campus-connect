import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    //hardcode the credentials
    const validEmail="student@gmail.com"
    const validPassword="123456"
    if(email===validEmail && password===validPassword){
        alert("Login successful");
        navigation.navigate("Home");

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