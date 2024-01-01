import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import OptionItem from "./OptionItem";

const DetailSection = ({ course, enrollCourse, userEnrolledCourse }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: course?.banner?.url }} style={styles.banner} />
      <View style={{ padding: 10 }}>
        <Text style={styles.name}>{course.name}</Text>
        <View>
          <View style={styles.row}>
            <OptionItem
              icon={"ios-book-outline"}
              value={course.chapters?.length + " Chapters"}
            />
            <OptionItem icon={"md-time-outline"} value={course.time} />
          </View>

          <View style={styles.row}>
            <OptionItem icon={"person-circle-outline"} value={course?.author} />
            <OptionItem icon={"cellular-outline"} value={course?.level} />
          </View>
        </View>
        <View>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.txt}>{course?.description?.markdown}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-evenly",
          }}
        >
          {userEnrolledCourse?.length == 0 ? (
            <TouchableOpacity
              onPress={() => enrollCourse()}
              style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit",
                  color: Colors.WHITE,
                  textAlign: "center",
                  fontSize: 15,
                }}
              >
                Enroll For Free
              </Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: Colors.LIGHT_PRIMARY,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.WHITE,
                textAlign: "center",
                fontSize: 15,
              }}
            >
              Mentorship $4.99
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
  },

  banner: {
    width: Dimensions.get("screen").width * 0.88,
    height: 190,
    borderRadius: 15,
    resizeMode: "contain",
  },

  name: {
    fontSize: 22,
    fontFamily: "outfit-medium",
    marginTop: 10,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  description: {
    fontFamily: "outfit-medium",
    fontSize: 20,
  },

  txt: {
    fontFamily: "outfit",
    color: Colors.GRAY,
    lineHeight: 23,
  },
});
