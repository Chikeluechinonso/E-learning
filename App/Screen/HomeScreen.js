import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "../Components/Home/Header";
import CourseList from "../Components/Home/CourseList";
import Colors from "../Utils/Colors";
import { createNewUser, getUserDetail } from "../Services/Index.js";
import { useUser } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-expo";
import { UserPointsContext } from "../Context/UserPointsContext";


const HomeScreen = () => {
  const { isLoaded, signOut } = useAuth();

  const { user } = useUser();

  const { userPoints, setUserPoints } = useContext(UserPointsContext);

  useEffect(() => {
    user && createUser();
  }, [user]);

  const createUser = () => {
    if (user) 
    {
      createNewUser(
        user.fullName,
        user.primaryEmailAddress.emailAddress,
        user.imageUrl
      ).then((resp) => {
        if (resp) GetUser()
      });
    }
  };

  const GetUser = () => {
    getUserDetail(user.primaryEmailAddress.emailAddress).then((resp) => {
      console.log("__", resp.userDetail?.point);
      setUserPoints(resp.userDetail?.point);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Header />
      </View>
      <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
        <View style={styles.courseLevel}>
          <CourseList level={"Basic"} />
          <CourseList level={"Intermediate"} />
          <CourseList level={"Advance"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view2: {
    backgroundColor: Colors.PRIMARY,
    height: 300,
    padding: 20,
    marginBottom: -90,
  },
  courseLevel: {
    padding: 10,
    //marginTop: -90,
  },
});
