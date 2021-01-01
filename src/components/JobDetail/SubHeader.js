import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JobDetailSubHeader = ({ title, startTime, endTime }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>時程：{`${startTime}-${endTime}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "#120E21",
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    color: "#979797",
    fontSize: 16,
  },
});

export default JobDetailSubHeader;
