import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const AppBtn = ({
  text,
  containerStyle,
  tagStyle,
  onTagPress,
  isSelected,
  selectedColor,
  disabled,
}) => {
  const tagClickColor = selectedColor || "#F7D86A";
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={onTagPress}
      disabled={disabled}
    >
      <View
        style={[
          styles.view,
          containerStyle,
          isSelected && { backgroundColor: tagClickColor },
        ]}
      >
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
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000000",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  text: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
  },
});

export default AppBtn;
