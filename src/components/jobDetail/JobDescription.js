import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

const JobDescription = ({ text }) => {
  return (
    <ScrollView contentContainerStyle={styles.infoView}>
      <Text style={styles.infoText}>{text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infoView: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  infoText: {
    fontSize: 18,
  },
});

export default JobDescription;
