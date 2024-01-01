import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors.js";

const SubHeading = ({ text, color=Colors.BLACK }) => {
  return (
    <View>
      <Text style={[styles.level, { color: color }]}>{text}</Text>
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  level: {
    fontFamily: "outfit-bold",
    fontSize: 24,
  },
});
