import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreenNavigation from "./HomeScreenNavigation";
import MyCourse from "../Screen/MyCourse";
import LeaderBoard from "../Screen/LeaderBoard";
import ProfileScreen from "../Screen/ProfileScreen";
import { Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="home" component={HomeScreenNavigation}
      options={{
        tabBarIcon:({color,size})=>(
          <Foundation name="home" size={size} color={color} />
          )
      }}
      />
      
      <Tab.Screen name="my-course" component={MyCourse} 
      options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="ios-book-sharp" size={size} color={color} />
          )
      }}
      />
      
      <Tab.Screen name="leaderboard" component={LeaderBoard} 
      options={{
        tabBarIcon:({color,size})=>(
          <MaterialIcons name="leaderboard" size={size} color={color} />
          )
      }}
      />
      
      <Tab.Screen name="profile" component={ProfileScreen}
      options={{
        tabBarIcon:({color,size})=>(
          <Ionicons name="ios-person" size={size} color={color} />
          )
      }}
      />
    </Tab.Navigator>
  );
}
