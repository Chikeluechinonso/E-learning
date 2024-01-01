import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const CourseItem = ({ item }) => {
  return (
    <View>
      <View style={styles.Container}>
        <Image
          source={{ uri: item?.banner?.url }}
          style={styles.courseBanner}
        />
        <View style={styles.courseView}>
          <Text style={styles.txt}>{item.name}</Text>
          <View style={styles.contain}>
            <View style={styles.chapters}>
              <Ionicons name="ios-book-outline" size={24} color="black" />
              <Text style={{ fontFamily: "outfit" }}>
                {item?.chapters?.length} Chapters
              </Text>
            </View>
            <View>
              <View style={styles.chapters}>
                <Ionicons name="md-time-outline" size={24} color="black" />
                <Text style={{ fontFamily: "outfit" }}>{item.time}</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginTop: 5,
              color: Colors.PRIMARY,
              fontFamily: "outfit-medium",
            }}
          >
            {item.price == 0 ? "Free" : item.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CourseItem;

const styles = StyleSheet.create({
  Container: {
    padding: 8,
    marginRight: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
  },

  courseBanner: {
    height: 120,
    width: 210,
    borderRadius: 13,
    resizeMode: 'contain',
  },

  courseView: {
    padding: 7,
  },

  txt: {
    fontFamily: "outfit-medium",
    fontSize: 17,
  },

  chapters: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    marginTop: 5,
    alignItems: "center",
  },

  contain: {
    gap: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
