import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import app from "./../../assets/images/app.png";
import Colors from "../Utils/Colors";
import { useWarmUpBrowser } from "./../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const OAuthGoogle = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <View style={styles.View}>
      <Image source={app} style={styles.onbordingImage} />
      <View style={styles.View1}>
        <Text style={styles.title}>CONGENIAL</Text>
        <Text style={styles.description}>
          Your Ultimate Programming Learning App...
        </Text>
 <ScrollView
showsVerticalScrollIndicator={false}>
          <TouchableOpacity
 style={styles.authView}
 onPress={OAuthGoogle}
 >
            <Image source={Colors.google} style={styles.authImage} />
            <Text style={styles.authText}>Sign Up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authView}>
            <Image source={Colors.fb} style={styles.authImage} />
            <Text style={styles.authText}>Sign Up with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authView}>
            <Image source={Colors.git} style={styles.authImage} />
            <Text style={styles.authText}>Sign Up with GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.authView1}>
            <Image source={Colors.twitter} style={styles.authImage} />
            <Text style={styles.authText}>Sign Up with Twitter</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  View: {
    display: "flex",
    alignItems: "center",
  },

  onbordingImage: {
    height: 500,
    width: 250,
    objectFit: "contain",
    marginTop: 10,
  },

  View1: {
    height: 400,
    width: "100%",
    marginTop: -100,
    padding: 20,
    borderRadius: 25,
    backgroundColor: Colors.PRIMARY,
  },

  title: {
    textAlign: "center",
    fontSize: 35,
    color: Colors.WHITE,
    fontFamily: "outfit-bold",
  },

  description: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    color: Colors.LIGHT_PRIMARY,
    fontFamily: "outfit",
  },

  authView: {
    backgroundColor: Colors.WHITE,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    padding: 10,
    borderRadius: 99,
    marginTop: 10,
    marginBottom: 10,
  },
  
  authView1: {
    backgroundColor: Colors.WHITE,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "center",
    padding: 10,
    borderRadius: 99,
    marginTop: 10,
    marginBottom: 45,
  },

  authImage: {
    width: 40,
    height: 40,
  },

  authText: {
    fontSize: 20,
    color: Colors.PRIMARY,
    fontFamily: "outfit",
  },
});
