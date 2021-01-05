import React from "react";
import { Icon, Avatar } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

const Info = ({ name, occupation, imageURI, tags }) => {
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
});

export default Info;
