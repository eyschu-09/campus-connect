import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
// import HomeScreen from './screens/HomeScreen';


//creation of a component
 
//create component with footer
    






export default function App(){
    return (
    
       <NavigationContainer>
          <AppNavigator/>
       </NavigationContainer>
    
    );
};

//objects:
// const student ={
//   name="eyschu",
//   Rollno:511,
//   branch:CSE

// }
// const styles=StyleSheet.create({
//   title:{
//       fontSize:32,
//       color:"#1E3A8A",
//       fontWeight:"bold",
//   },
const styles=StyleSheet.create({
  container:{
    flex:1,//tells a component how much space to occupy 
    // justifyContent: "center",
    // alignItems: "center",
    gap:10,
    justifyContent:"center",
    alignItems:"center",

  },
})
