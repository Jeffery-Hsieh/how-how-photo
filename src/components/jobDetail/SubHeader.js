import React from "react";
import { View, Text, StyleSheet } from "react-native";
import IconWithText from "../ui/IconWithText";

const JobDetailSubHeader = ({ facebookId, lineId, moveToChatScreen }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <IconWithText
          iconSource="font-awesome-5"
          iconName="facebook"
          text={facebookId || "-"}
        />
      </View>
      <Text>|</Text>
      <View style={styles.iconView}>
        <IconWithText
          iconSource="font-awesome-5"
          iconName="line"
          text={lineId || "-"}
        />
      </View>
      <Text>|</Text>
      <View style={styles.iconView}>
        <IconWithText
          iconSource="font-awesome-5"
          iconName="comment-dots"
          text="聯絡案主"
          iconOnPress={moveToChatScreen}
          disabled={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  iconView: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  contactView: {},
});

export default JobDetailSubHeader;
