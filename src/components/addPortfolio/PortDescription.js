import React, { useState } from "react";
import { Button, View, Image, StyleSheet, Text, TextInput } from "react-native";
import { Icon } from "react-native-elements";

const PortDescription = ({ id, imageURI, changeDescription }) => {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <View key={id} style={styles.portfolioView}>
      <View style={[styles.cardView]}>
        <Image style={styles.image} source={{ uri: imageURI }} />
        <View style={styles.infoView}>
          <Text style={styles.infoTitle}>簡介</Text>
          <TextInput
            editable={isEditing}
            multiline={true}
            onChangeText={(text) => changeDescription(id, text)}
            style={styles.infoText}
            placeholder="介紹你的作品..."
          />
        </View>
        <Icon
          containerStyle={styles.check}
          type="material-community"
          name={isEditing ? "check" : "pencil"}
          color={isEditing ? "#0A9B17" : "#494949"}
          onPress={() => setIsEditing(!isEditing)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portfolioView: {
    alignItems: "center",
  },
  cardView: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 24,
    margin: 12,
    marginBottom: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    marginBottom: 32,
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 30,
  },
  infoView: {
    width: "100%",
    height: 280,
  },
  infoText: {
    borderWidth: 1,
    borderColor: "#000000",
    height: 150,
    padding: 8,
  },
  check: {
    position: "absolute",
    bottom: 24,
    right: 24,
  },
});

export default PortDescription;
