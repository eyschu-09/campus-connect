// import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import WelcomeCard from '../components/WelcomeCard';
// import NoticeCard from '../components/NoticeCard';
// import StudentForm from '../components/StudentForm';
// import ProfileScreen from './ProfileScreen';
// export default function HomeScreen({ navigation }) {
//   return (
//     <View>
//       <Header />
//       <WelcomeCard
//       // a person sends a money how this money converts into bitcoin and how the bitcoin into money and how the receiver takes the money
//       />
//       <NoticeCard
//         description="4PM today"
//         title="holiday"

//       />

//       <NoticeCard
//         description="pay fee by tomorrow"
//         title="fee paid"

//       />

//       {/* <StudentForm/> */}
//       <Button
//         title="Profile"
//         onPress={() => navigation.navigate("Profile")}
//       />
//       <Footer />
//     </View>
//   )
// }
import { StyleSheet, View } from "react-native";
import NoticeCard from "../components/NoticeCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <NoticeCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});