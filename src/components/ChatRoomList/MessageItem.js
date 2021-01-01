import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

const MessageItem = ({ id, name, sendAt, latestMessage, chatRoomClick }) => (
  <TouchableOpacity
    key={id}
    style={styles.messageView}
    onPress={() => chatRoomClick(id)}
  >
    <Avatar
      rounded
      containerStyle={styles.avatar}
      size="large"
      source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
    />
    <View style={styles.infoView}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>{latestMessage}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  messageView: {
    flexDirection: "row",
    marginBottom: 12,
  },
  avatar: {
    marginRight: 12,
  },
  infoView: {
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default MessageItem;
