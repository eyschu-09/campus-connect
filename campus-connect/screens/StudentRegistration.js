
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

export default function StudentRegistration({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleRegister() {


    alert("Registration Successful");

    console.log({
      username,
      password,
      email,
      phone,
    });

    navigation.navigate("Login");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>STUDENT REGISTRATION</Text>

        {/* Student Name */}
        <Text style={styles.label}>Student Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Phone Number */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Register Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        {/* Preview */}
        <Text style={styles.previewTitle}>Preview</Text>

        <View style={styles.previewBox}>
          <Text style={styles.previewText}>
            <Text style={styles.bold}>Name:</Text> {username}
          </Text>

          <Text style={styles.previewText}>
            <Text style={styles.bold}>Password:</Text> {password}
          </Text>

          <Text style={styles.previewText}>
            <Text style={styles.bold}>Phone Number:</Text> {phone}
          </Text>

          <Text style={styles.previewText}>
            <Text style={styles.bold}>Email:</Text> {email}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EAF6FF",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    elevation: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1565C0",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },

  input: {
    borderWidth: 1,
    borderColor: "#90CAF9",
    borderRadius: 10,
    backgroundColor: "#F8FBFF",
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#1976D2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  previewTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    color: "#1565C0",
  },

  previewBox: {
    backgroundColor: "#F1F8FF",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#BBDEFB",
  },

  previewText: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },

  bold: {
    fontWeight: "bold",
  },
});
