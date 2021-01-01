import React from "react";
import MessageItem from "./MessageItem";
import { ScrollView } from "react-native";

const MessageList = ({ data, chatRoomClick }) => (
  <ScrollView style={{ backgroundColor: "#fff" }}>
    {data.map((chatRoom) => (
      <MessageItem
        key={chatRoom.id}
        chatRoomClick={chatRoomClick}
        {...chatRoom}
      />
    ))}
  </ScrollView>
);

export default MessageList;
