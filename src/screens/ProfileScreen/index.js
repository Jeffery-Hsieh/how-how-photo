import React, { useLayoutEffect, useContext, useState } from "react";
import { Dimensions } from "react-native";
import { ScrollView, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import { userHack } from "../../store/constant";
import SessionContext from "../../store/context";
import Gallery from "../../components/profile/Gallery";
import Info from "../../components/profile/Info";
import AddBtn from "../../components/ui/AddBtn";

const ProfileScreen = ({ navigation, route }) => {
  const [session, setSession] = useContext(SessionContext);
  const userId = route.params && route.params.userId;
  console.log(userId);

  const [images, setImages] = useState([
    { id: 100, uri: "https://picsum.photos/id/100/300/200" },
    { id: 101, uri: "https://picsum.photos/id/101/300/200" },
    { id: 102, uri: "https://picsum.photos/id/102/300/200" },
    { id: 103, uri: "https://picsum.photos/id/103/300/200" },
  ]);

  const { user } = session;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          style={styles.accountIcon}
          type="material-community"
          name="account"
          onPress={changeUser}
        />
      ),
    });
  }, [navigation, user]);

  const changeUser = () => {
    const newUser = user.id == userHack[0].id ? userHack[1] : userHack[0];

    setSession({
      ...session,
      user: newUser,
    });
  };

  const addImages = (newImages) => {
    const imagesCopy = [...images];
    setImages(imagesCopy.concat(newImages));
  };

  const moveToRatingScreen = () => {
    navigation.navigate("Rating", { name: user.name, imageURI: user.imageURI });
  };

  const moveToAddPortfolio = () =>
    navigation.navigate("Add Portfolio", {
      addImages: addImages,
    });

  const userDisplay = userId
    ? {
        ...user,
        imageURI: `https://i.pravatar.cc/300?img=${userId}`,
      }
    : user;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bg}></View>
      <View style={styles.infoView}>
        <Info {...userDisplay} moveToNextScreen={moveToRatingScreen} />
      </View>
      <View style={styles.galleryView}>
        <Gallery images={images} />
        <AddBtn onPress={moveToAddPortfolio} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  bg: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    height: Dimensions.get("window").height,
    backgroundColor: "#DBE7E4",
  },
  infoView: {
    alignItems: "center",
  },
  accountIcon: {
    marginRight: 12,
  },
});

export default ProfileScreen;
