import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screen/HomeScreen";
import CourseDetailScreen from "../Screen/CourseDetailScreen";
import ChapterContentScreen from "../Screen/ChapterContentScreen";

const  Stack = createStackNavigator();

export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen}
      />
      
      <Stack.Screen name="course-detail" component={CourseDetailScreen} 
      />
      
      <Stack.Screen name="chapters" component={ChapterContentScreen} 
      />
      
    </Stack.Navigator>
  );
};
