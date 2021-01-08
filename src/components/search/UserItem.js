import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon, Avatar, Rating } from "react-native-elements";
import IconWithText from "../ui/IconWithText";

const STAR_IMAGE = require("../../assets/star.png");

const UserItem = ({
  id,
  name,
  occupation,
  skills,
  rating,
  moveToNextScreen,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardView} onPress={moveToNextScreen}>
        <View style={styles.avatarView}>
          <Avatar
            rounded
            containerStyle={styles.avatarImage}
            size="large"
            source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
          />
          <Rating
            readonly
            style={styles.avatarRating}
            ratingImage={STAR_IMAGE}
            type="custom"
            ratingCount={5}
            imageSize={16}
            startingValue={rating}
            ratingColor="#99C1DE"
          />
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentTitle}>{name}</Text>
          <IconWithText
            containerStyle={styles.contentIconText}
            iconSource="font-awesome-5"
            iconName="briefcase"
            text={occupation}
          />
          <IconWithText
            containerStyle={styles.contentIconText}
            iconSource="font-awesome-5"
            iconName="user-tag"
            text={skills[0]}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.goToDetailView}>
        <Icon
          type="material-community"
          name="chevron-right"
          onPress={moveToNextScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 240,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 12,
    paddingVertical: 8,
  },
  cardView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarView: {
    marginHorizontal: 32,
    alignItems: "center",
  },
  avatarImage: {
    marginBottom: 24,
  },
  contentView: {
    marginVertical: 36,
  },
  contentTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 12,
  },
  contentIconText: {
    marginTop: 16,
  },
  goToDetailView: {
    position: "absolute",
    top: "50%",
    right: 8,
  },
});

export default UserItem;
