import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text, Switch } from "react-native";
import { Icon } from "react-native-elements";

const ChatReply = ({ title, text, enabledOnChange }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <Switch
          trackColor={{ true: "#C5DEDD" }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.content}>
        <Icon
          style={styles.contentIcon}
          type="font-awesome-5"
          name="angle-double-right"
        />
        <TextInput multiline={true} style={styles.contentText} value={text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBE7E445",
    paddingLeft: 20,
    paddingTop: 8,
    paddingRight: 4,
    marginBottom: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    flexDirection: "row",
  },
  contentIcon: {
    marginTop: 1,
    marginRight: 8,
  },
  contentText: {
    maxWidth: 200,
  },
});

export default ChatReply;
