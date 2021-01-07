import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import AppBtn from "../ui/AppBtn";

const JobDescription = ({ text, showApplyBtn }) => {
  return (
    <ScrollView contentContainerStyle={styles.infoView}>
      <Text style={styles.infoText}>{text}</Text>
      {showApplyBtn && (
        <View style={styles.button}>
          <AppBtn text="應徵" />
        </View>
      )}
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
  button: {
    marginTop: 36,
    alignSelf: "flex-end",
  },
});

export default JobDescription;
