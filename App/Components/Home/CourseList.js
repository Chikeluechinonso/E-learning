import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services/Index";
import SubHeading from "./SubHeading";
import CourseItem from "./CourseItem";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CourseList = ({ level }) => {
  const [courseList, setCourseList] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(level).then((resp) => {
      console.log("RESP__", resp);
      setCourseList(resp?.courses);
    });
  };
  return (
    <View>
      <SubHeading
        text={level + " Courses"}
        color={level == "Basic" && Colors.WHITE}
      />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("course-detail", {
                course: item,
              })
            }
          >
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CourseList;

const styles = StyleSheet.create({});
