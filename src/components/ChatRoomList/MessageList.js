import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import MessageItem from "./MessageItem";
import AppSearchBar from "../../components/ui/AppSearchBar";

const MessageList = ({ data, chatRoomClick }) => {
  if (!data.length) {
    return (
      <View style={styles.warningView}>
        <Text style={styles.warningTitle}>沒有搜尋到符合的案件</Text>
        <Text style={styles.warningText}>請嘗試其他搜尋關鍵字</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      {data.map((chatRoom, index) => (
        <MessageItem
          key={chatRoom.id}
          index={index}
          chatRoomClick={chatRoomClick}
          {...chatRoom}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  warningView: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: "60%",
  },
  warningTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

export default MessageList;
