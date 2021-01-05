import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const AddBtn = ({ onPress, containerStyle }) => (
  <TouchableOpacity
    style={[styles.container, containerStyle]}
    onPress={onPress}
  >
    <Icon containerStyle={styles.icon} type="material-community" name="plus" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff50",
    alignItems: "center",
  },
  icon: {
    paddingVertical: 40,
  },
});

export default AddBtn;
