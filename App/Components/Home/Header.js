import { StyleSheet, Image, View, Text, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
       <View>
      <View style={[{justifyContent: 'space-between'},styles.View2]}>
        <View style={styles.View2}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text style={styles.text}>Welcome,</Text>
            <Text style={styles.text2}>{user?.fullName}</Text>
          </View>
        </View>
        <View style={styles.View2}>
          <Image source={Colors.Bronze} style={styles.coinImage} />
          <Text style={styles.coinText}>199</Text>
        </View>
        </View>
        <View style={styles.search}>
        <TextInput placeholder='Search Courses' style={styles.textInput}/>
        <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
        </View>
      </View>
    )
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},

  View2: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
      marginTop: 10,
  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },

  text: {
    color: Colors.WHITE,
    fontFamily: "outfit",
  },

  text2: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: "outfit-medium",
  },

  coinImage: {
    width: 30,
    height: 30,
  },

  coinText: {
    color: Colors.WHITE,
    fontFamily: "outfit",
    fontSize: 20,
  },
  
  textInput: {
    width: '60%',
    fontFamily: 'outfit',
    fontSize: 18,
  },
  
search: {
  backgroundColor: Colors.WHITE,
  paddingLeft: 20,
  paddingRight: 5,
  display: "flex",
  flexDirection: "row",
  borderRadius: 99,
  marginTop: 25,
  justifyContent: "space-between",
},
});
