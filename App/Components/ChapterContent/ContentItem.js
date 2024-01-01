import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import RenderHtml from "react-native-render-html";
import Colors from "../../Utils/Colors";

const ContentItem = ({ description, output }) => {
  const { width } = useWindowDimensions();
  const [ isRun, setIsRun ] = useState(false);
  
  const descriptionSource = {
    html: description,
  };

  const outputSource = {
    html: output,
  };
  return (
    description && (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <RenderHtml
          contentWidth={width}
          source={descriptionSource}
          tagsStyles={tagsStyles}
        />
        {output != null ? (
          <TouchableOpacity onPress={() => setIsRun(true)}style={{ marginBottom: 20, marginTop: -20 }}>
            <Text style={styles.run}>Run</Text>
          </TouchableOpacity>
        ) : null}


          {isRun?
          <>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            Output
          </Text>
          <RenderHtml
            contentWidth={width}
            source={outputSource}
            tagsStyles={outputStyles}
          />
          </>
         : null }
      </ScrollView>
    )
  );
};

export default ContentItem;

const tagsStyles = {
  body: {
    fontFamily: "outfit",
    fontSize: 17,
  },

  code: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
};

const outputStyles = {
  body: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 25,
    fontSize: 17,
    fontFamily: "outfit",
  },
  code: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
};

const styles = StyleSheet.create({
  run: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 10,
    fontFamily: "outfit",
    fontSize: 14,
    color: Colors.WHITE,
    textAlign: "center",
    width: 100,
  },
});
