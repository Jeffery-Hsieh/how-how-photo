import React from "react";
import { Icon, Rating, Avatar } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const STAR_IMAGE = require("../../assets/star.png");

const Info = ({
  name,
  userId,
  occupation,
  imageURI,
  tags,
  moveToNextScreen,
}) => {
  return (
    <>
      <Avatar
        rounded
        containerStyle={styles.avatar}
        size="xlarge"
        source={{ uri: imageURI }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.occupation}>{occupation}</Text>
      <View style={styles.tagContainer}>
        {tags.map((tag) => (
          <View key={tag} style={styles.tagView}>
            <Icon
              type="material-community"
              containerStyle={styles.tagIcon}
              color="#787885"
              name="tag-outline"
              size={24}
            />
            <Text>{tag}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        containerStyle={styles.rating}
        onPress={moveToNextScreen}
      >
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Text style={{ fontSize: 40, marginRight: 4 }}>{`${3.5}`}</Text>
          <Text style={{ marginBottom: 8 }}>評價</Text>
        </View>
        <Rating
          readonly
          style={styles.reviewRating}
          ratingImage={STAR_IMAGE}
          type="custom"
          ratingCount={5}
          imageSize={16}
          startingValue={4.5}
          ratingColor="#99C1DE"
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  infoView: {
    alignItems: "center",
  },
  avatar: {
    marginBottom: 32,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  occupation: {
    fontSize: 16,
    marginBottom: 12,
  },
  tagContainer: {
    flexDirection: "row",
    marginBottom: 60,
  },
  tagView: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  rating: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default Info;
