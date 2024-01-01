import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { CompleteChapterContext } from '../../Context/CompleteChapterContext';


const ChapterSection = ({ chapterList, userEnrolledCourse }) => {
  const navigation = useNavigation();

  const { isChapterComplete, setIsChapterComplete } = useContext(
    CompleteChapterContext
  );

  const OnChapterPress = (chapter) => {
    if (userEnrolledCourse.length == 0) {
      ToastAndroid.show("Please Enroll To Course!", ToastAndroid.LONG);
      return;
    } else {
      setIsChapterComplete(false);
      navigation.navigate("chapters", {
        content: chapter.content,
        chapterId: chapter.id,
        userCourseRecordId: userEnrolledCourse[0]?.id,
      });
    }
  };

  const checkIsChapterCompleted = (chapterId) => {
    if (userEnrolledCourse[0]?.completedChapter?.length <= 0) {
      return false;
    }
    const resp = userEnrolledCourse[0]?.completedChapter.find(
      (item) => item.chapterId == chapterId
    );
    return resp;
  };
  return (
    chapterList && (
      <View style={styles.cont}>
        {chapterList.map((item, index) => (
          <TouchableOpacity
            onPress={() => OnChapterPress(item)}
            style={[
              checkIsChapterCompleted(item.id)
                ? styles.completedChapter
                : styles.container,
            ]}
          >
            {checkIsChapterCompleted(item.id) ? (
              <Ionicons
                name="checkmark-circle"
                size={30}
                color={Colors.GREEN}
              />
            ) : (
              <Text style={styles.index}>{index + 1}</Text>
            )}
            <Text style={styles.title}>{item.title}</Text>
            {userEnrolledCourse?.length == 0 ? (
              <Ionicons name="md-lock-closed" size={25} color={Colors.GRAY} />
            ) : (
              <Ionicons
                name="play"
                size={25}
                color={
                  checkIsChapterCompleted(item.id) ? Colors.GREEN : Colors.GRAY
                }
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    )
  );
};

export default ChapterSection;

const styles = StyleSheet.create({
  cont: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: Colors.GRAY,
  },

  completedChapter: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.LIGHT_GREEN,
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: Colors.GREEN,
  },

  index: {
    fontFamily: "outfit-medium",
    fontSize: 27,
    color: Colors.GRAY,
  },

  title: {
    fontFamily: "outfit",
    fontSize: 21,
    color: Colors.GRAY,
  },
});
