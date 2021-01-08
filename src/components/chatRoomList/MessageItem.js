import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

const MessageItem = ({
  index,
  id,
  name,
  sendAt,
  latestMessage,
  chatRoomClick,
}) => (
  <TouchableOpacity
    key={id}
    style={[styles.container, index % 2 == 1 && { backgroundColor: "#F0EFEB" }]}
    onPress={() => chatRoomClick(id)}
  >
    <View style={styles.messageView}>
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
    </View>
    <Text style={styles.sendAtText}>{sendAt}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  messageView: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 12,
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
    marginBottom: 4,
  },
  sendAtText: {
    marginTop: 8,
    marginRight: 12,
  },
});

export default MessageItem;
