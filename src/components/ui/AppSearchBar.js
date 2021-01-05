import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export const AppSearchBar = ({ value, searchTextChange, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Icon style={styles.icon} type="material-community" name="magnify" />
      <TextInput
        style={styles.text}
        value={value}
        onChangeText={(text) => searchTextChange(text)}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderColor: "#D9D0E3",
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    flex: 1,
  },
});

export default AppSearchBar;
