import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentRegistration from "../screens/StudentRegistration";
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
export default function AppNavigator(){
    //this creates navigation stack
    const Stack = createNativeStackNavigator();
    return(
         <Stack.Navigator>
         <Stack.Screen 
         name="Register"
         component={StudentRegistration}
         />
         <Stack.Screen 
         name="Login"
         component={LoginScreen}
         />
         <Stack.Screen 
         name="Profile"
         component={ProfileScreen}
         />
         <Stack.Screen
          name="Home"
          component={HomeScreen}
          />
          </Stack.Navigator>
    )
}