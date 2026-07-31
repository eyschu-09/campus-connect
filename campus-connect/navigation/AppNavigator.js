import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentRegistration from "../screens/StudentRegistration";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabs from "./BottomTabs";

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
          name="Main"
          component={BottomTabs}
          />
          </Stack.Navigator>
         
    )
}