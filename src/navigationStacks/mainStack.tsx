import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: true }}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}