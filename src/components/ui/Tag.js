import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const Tag = ({
  text,
  containerStyle,
  tagStyle,
  onTagPress,
  isSelected,
  selectedColor,
}) => {
  const tagClickColor = selectedColor || "#F7D86A";
  return (
    <TouchableOpacity style={[styles.container]} onPress={onTagPress}>
      <View
        style={[
          styles.view,
          containerStyle,
          isSelected && { backgroundColor: tagClickColor },
        ]}
      >
        <Icon
          type="material-community"
          name={isSelected ? "check" : "plus"}
          color={isSelected ? "#000000" : "#ffffff"}
          size={16}
        />
        <Text
          style={[styles.text, tagStyle, isSelected && { color: "#000000" }]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  view: {
    flexDirection: "row",
    backgroundColor: "#797C7E",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000000",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 4,
  },
});

export default Tag;
