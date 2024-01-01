import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import React, { useEffect, useContext } from "react";
import Content from "../Components/ChapterContent/Content";
import { useRoute } from "@react-navigation/native";
import { MarkChapterCompleted } from "../Services/Index";
import { useNavigation } from "@react-navigation/native";
import { CompleteChapterContext } from '../Context/CompleteChapterContext';
import { UserPointsContext } from '../Context/UserPointsContext';


const ChapterContentScreen = () => {
  const param = useRoute().params;
  const navigation = useNavigation();
const { userPoints, setUserPoints } = useContext(UserPointsContext);
const { isChapterComplete, setIsChapterComplete } = useContext(CompleteChapterContext);
  // chapter id
  //record id

  useEffect(() => {
    console.log("ChapterId", param.chapterId);
    console.log("RecordId", param.userCourseRecordId);
  }, [param]);

const onChapterFinish = () => {
  const totalPoints = Number(userPoints)+param.content?.length*2;
    MarkChapterCompleted(param.chapterId, param.userCourseRecordId, user.primaryEmailAddress.emailAddress, totalPoints).then(
      (resp) => {
        if (resp) {
          ToastAndroid.show(
            "Chapter completed successfully",
            ToastAndroid.LONG
          );
          setIsChapterComplete(true)
          navigation.goBack();
        }
      }
    );
  };
  return (
    param.content && (
      <View>
        <Content
          content={param.content}
          onChapterFinish={() => onChapterFinish()}
        />
      </View>
    )
  );
};

export default ChapterContentScreen;

const styles = StyleSheet.create({});
