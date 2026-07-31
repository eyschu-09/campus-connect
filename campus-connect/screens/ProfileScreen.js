import { Text, View, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  function handleLogout() {
    alert("Logged out successfully");
    navigation.navigate("Login");
  }

  return (
    <View>
      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  );
}