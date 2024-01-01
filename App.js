import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./App/Screen/LoginScreen";
import * as SplashScreen from "expo-splash-screen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import TabNavigation from "./App/Navigations/TabNavigation";
import { CompleteChapterContext } from "./App/Context/CompleteChapterContext";
import { UserPointsContext } from "./App/Context/UserPointsContext";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ isChapterComplete, setIsChapterComplete ] = useState(false);
  const [ userPoints, setUserPoints ] = useState(false);
  
  const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  const [fontsLoaded] = useFonts({
    'outfit': require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-light": require("./assets/fonts/Outfit-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey="pk_test_ZmFtb3VzLWhvb2t3b3JtLTU0LmNsZXJrLmFjY291bnRzLmRldiQ"
      tokenCache={tokenCache}
    >
    <UserPointsContext.Provider value={{userPoints, setUserPoints}}>
    <CompleteChapterContext.Provider value={{isChapterComplete, setIsChapterComplete}}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </CompleteChapterContext.Provider>
    </UserPointsContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
