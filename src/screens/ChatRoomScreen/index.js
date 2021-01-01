import React, { useCallback, useContext, useEffect, useState } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { Icon, Avatar } from "react-native-elements";
import { BlurView } from "expo-blur";

const msg = [
  {
    _id: 1,
    text: "Hello developer",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 2,
    text: "Hello developer",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 3,
    text: "Hello developer",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 4,
    text: "Hello developer",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 5,
    text: "Hello developer",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 6,
    text: "Hello developer",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 7,
    text: "Hello developer",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 8,
    text: "Hello developer",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
];

const ChatScreen = ({ route }) => {
  // get messages
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(msg);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

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
            source={{ uri: `https://i.pravatar.cc/300?img=1` }}
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
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
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
