import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Rating, Divider } from "react-native-elements";

const STAR_IMAGE = require("../../assets/star.png");

const Rate = ({ name, review, date, rating }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>{review}</Text>
      <Text style={styles.subtitle}>Rating</Text>
      <Rating
        readonly
        ratingImage={STAR_IMAGE}
        type="custom"
        style={styles.ratingView}
        ratingCount={5}
        imageSize={16}
        startingValue={rating}
        ratingColor="#99C1DE"
      />
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 12,
  },
  text: {
    color: "#979797",
    marginBottom: 20,
  },
  subtitle: {
    marginBottom: 8,
  },
  ratingView: {
    width: 80,
    marginBottom: 20,
  },
});

export default Rate;
