import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

const ProgressBar = ({ contentLength, contentIndex }) => {
  const arraySize = Array.from(
    { length: contentLength },
    (_, index) => index + 1
  );
  const width = 100 / contentLength;
  return (
    <View style={styles.container}>
      {arraySize.map((item, index) => (
        <View
          style={{
            backgroundColor: `${
              index <= contentIndex ?Colors.GREEN : Colors.GRAY
            }`,
            width: width + "%",
            borderRadius: 10,
            height: 10,
            margin: 5,
            flex: 1,
          }}
        ></View>
      ))}
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
