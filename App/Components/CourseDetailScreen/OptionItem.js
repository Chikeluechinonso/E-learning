import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";


const OptionItem = ({ icon, value }) => {
  return (
            <View style={styles.chapters}>
              <Ionicons name={icon} size={24} color="black" />
              <Text style={{ fontFamily: "outfit" }}>
                {value}
              </Text>
            </View>
    )
}

export default OptionItem;

const styles = StyleSheet.create({
 chapters: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    marginTop: 5,
    alignItems: "center",
  },

  })