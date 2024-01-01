import { StyleSheet, Text, View, ScrollView, ToastAndroid } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DetailSection from "../Components/CourseDetailScreen/DetailSection";
import ChapterSection from "../Components/CourseDetailScreen/ChapterSection";
import { enrollCourse, getUserEnrolledCourse } from "../Services/Index.js";
import { useUser } from "@clerk/clerk-expo";
import {CompleteChapterContext } from '../Context/CompleteChapterContext';
const CourseDetailScreen = () => {
  const navigation = useNavigation();
  const params = useRoute().params;
  const { isChapterComplete, setIsChapterComplete } = useContext(
    CompleteChapterContext
  );

  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    if (user && params.course) {
      GetUserEnrolledCourse();
    }
    //console.log(params.course);
  }, [params.course, user]);

  useEffect(() => {
    isChapterComplete && GetUserEnrolledCourse();
  },[isChapterComplete])
  
  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        //console.log(resp);
        if (resp) {
          ToastAndroid.show("Course Enrolled successfully!", ToastAndroid.LONG);
          GetUserEnrolledCourse();
        }
      }
    );
  };

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(
      params.course.id,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      console.log("enrolled", resp.userEnrolledCourses);
      setUserEnrolledCourse(resp.userEnrolledCourses);
    });
  };

  return (
    params.course && (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#fefdfd",
              borderRadius: 99,
            }}
          >
            <Ionicons name="chevron-back-sharp" size={40} color="black" />
          </View>
        </TouchableOpacity>
        <DetailSection
          course={params.course}
          userEnrolledCourse={userEnrolledCourse}
          enrollCourse={() => UserEnrollCourse()}
        />
        <ChapterSection
          chapterList={params.course.chapters}
          userEnrolledCourse={userEnrolledCourse}
        />
      </ScrollView>
    )
  );
};

export default CourseDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    padding: 10,
  },
});
