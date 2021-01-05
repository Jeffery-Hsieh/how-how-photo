import React, { useCallback, useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { Icon, Avatar } from "react-native-elements";
import { BlurView } from "expo-blur";
import * as firebase from "firebase";

import SessionContext from "../../store/context";
import useGetChatRoomMessages from "../../hooks/useGetChatRoomMessages";

const ChatScreen = ({ route }) => {
  const [session] = useContext(SessionContext);
  const { firebase, user } = session;
  const { roomId } = route.params;
  const [{ messages, isLoading }] = useGetChatRoomMessages(firebase, roomId);

  const handleSend = async (messages) => {
    const text = messages[0].text;

    firebase
      .firestore()
      .collection("messages")
      .doc(roomId)
      .collection("chat")
      .add({
        sendAt: firebase.firestore.Timestamp.fromDate(new Date()),
        text: text,
        sender: userId,
      });
    firebase.firestore().collection("messages").doc(groupId).set({
      previewMsg: text,
    });
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendContainer}>
          <Icon icon="send-circle" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  };

  const renderLoading = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  };

  return (
    <>
      <BlurView
        intensity={90}
        style={[StyleSheet.absoluteFill, styles.userInfo]}
      >
        <View style={styles.avatar}>
          <Avatar
            containerStyle={styles.avatarImage}
            rounded
            source={{ uri: `https://i.pravatar.cc/300?img=30` }}
          />
          <Text style={styles.avatarText}>Alex Marchal</Text>
        </View>
        <View style={styles.moreInfo}>
          <Icon
            style={styles.moreInfoIcon}
            type="material-community"
            name="phone"
          />
          <Icon type="material-community" name="dots-vertical" />
        </View>
      </BlurView>
      <GiftedChat
        messages={messages}
        onSend={(messages) => handleSend(messages)}
        user={{
          _id: user.id,
        }}
        alwaysShowSend={true}
        placeholder="輸入文字..."
        renderLoading={renderLoading}
        listViewProps={{
          style: {
            backgroundColor: "white",
          },
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    position: "absolute",
    width: "100%",
    height: 100,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
  avatar: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarImage: {
    marginRight: 8,
  },
  avatarText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  moreInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  moreInfoIcon: {
    marginRight: 12,
  },
  sendContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
