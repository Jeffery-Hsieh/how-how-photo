import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const Tag = ({ text, onPress, isSelected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.view}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  view: {
    borderRadius: 24,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
  },
});

export default Tag;
