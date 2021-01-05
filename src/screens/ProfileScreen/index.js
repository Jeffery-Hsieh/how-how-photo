import React, { useLayoutEffect, useContext } from "react";
import { Dimensions } from "react-native";
import { ScrollView, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import { userHack } from "../../store/constant";
import SessionContext from "../../store/context";
import Gallery from "../../components/profile/Gallery";
import Info from "../../components/profile/Info";
import AddBtn from "../../components/ui/AddBtn";

const ProfileScreen = ({ navigation }) => {
  console.disableYellowBox = true;

  const moveToAddPortfolio = () => navigation.navigate("Add Portfolio");
  const [session, setSession] = useContext(SessionContext);

  const { user } = session;

  const changeUser = () => {
    const newUser = user.id == userHack[0].id ? userHack[1] : userHack[0];

    setSession({
      ...session,
      user: newUser,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          style={styles.accountIcon}
          type="material-community"
          name="account"
          onPress={changeUser}
        />
      ),
    });
  }, [navigation, user]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bg}></View>
      <View style={styles.infoView}>
        <Info {...user} />
      </View>
      <View style={styles.galleryView}>
        <Gallery />
        <AddBtn onPress={moveToAddPortfolio} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  bg: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0,
    height: Dimensions.get("window").height,
    backgroundColor: "#DBE7E4",
  },
  infoView: {
    alignItems: "center",
  },
  accountIcon: {
    marginLeft: 12,
  },
});

export default ProfileScreen;
