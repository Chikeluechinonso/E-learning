import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import ContentItem from "./ContentItem";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Content = ({ content, onChapterFinish }) => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  let contentRef;

  const onNextBtnPress = (index) => {
    if (content?.length <= index + 1) {
      //navigation.goBack();
      
      onChapterFinish()
      return;
    }
    setActiveIndex(index + 1);
    contentRef.scrollToIndex({ animated: true, index: index + 1 });
  };
  return (
    <View style={styles.container}>
      <ProgressBar contentLength={content?.length} contentIndex={activeIndex} />

      <FlatList
        data={content}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={(ref) => {
          contentRef = ref;
        }}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.contented}>
            <Text style={styles.txt}>{item.heading}</Text>
            <ContentItem
              description={item?.description?.html}
              output={item?.output?.html}
            />

            <TouchableOpacity onPress={() => onNextBtnPress(index)}>
              <Text style={styles.next}>
                {content?.length > index + 1 ? "Next" : "Finish"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: '100%'
  },

  contented: {
    width: Dimensions.get("screen").width,
    padding: 10,
  },

  txt: {
    fontFamily: "outfit-bold",
    fontSize: 22,
    marginTop: 5,
  },

  next: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 17,
    fontFamily: "outfit",
  },
});
