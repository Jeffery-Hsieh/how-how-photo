import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const IconWithText = ({
  iconSource,
  iconName,
  text,
  containerStyle,
  textStyle,
}) => {
  if (!text) {
    return null;
  }

  return (
    <View style={[styles.rowView, containerStyle]}>
      <Icon
        type={iconSource || "material-community"}
        containerStyle={styles.icon}
        color="#787885"
        name={iconName}
        size={24}
      />
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
});

export default IconWithText;
