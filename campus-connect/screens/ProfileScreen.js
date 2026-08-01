
import { Text, View, Button,StyleSheet ,Modal} from 'react-native';
import { useState } from 'react';
export default function ProfileScreen({ navigation }) {
  const[modalVisible,setModalVisible]=useState(false)
  function handleLogout() {
    alert("Logged out successfully");
    navigation.navigate("Login");
  }

  return (
     <View style={styles.container}>

      <View style={styles.card}>
        <Text>Student Profile</Text>

        <Text>
          Name: <Text>Eyschu Buddi</Text>
        </Text>

        <Text>
          Department: <Text>Computer Science & Engineering</Text>
        </Text>
      </View>

      <Button
        title="Logout"
        onPress={handleLogout}
      />
      <Button
        title="view profile"
        onPress={()=>setModalVisible(true)}
      />
      <Modal
      visible={modalVisible}
      animationType='slide'>
      <View>
        <Text>welcome</Text>
      </View>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
})