import React, { useEffect, useContext } from "react";
import { ActivityIndicator, Text, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { Icon, Avatar } from "react-native-elements";
import { BlurView } from "expo-blur";
import * as firebase from "firebase";
import { Video } from "expo-av";

import { userHack, portfolio } from "../../store/constant";
import SessionContext from "../../store/context";
import useGetChatRoomMessages from "../../hooks/useGetChatRoomMessages";

const ChatScreen = ({ route }) => {
  const [session] = useContext(SessionContext);
  const { firebase, user } = session;
  const { roomId } = route.params;
  const [{ messages, isLoading }] = useGetChatRoomMessages(firebase, roomId);

  useEffect(() => {
    const latestMessage = messages.length && messages[0];
    if (latestMessage) {
      addAutoReplyListener(latestMessage);
    }
  }, [messages]);

  const addAutoReplyListener = (message) => {
    portfolio.forEach((item) => {
      if (message.text.includes(item.matchText)) {
        if (message["user"]["_id"] == userHack[1].id) {
          sendToFirebase(
            userHack[0].id,
            item.text,
            item.imageURI,
            item.videoURI
          );
        }
      }
    });
  };

  const sendToFirebase = async (userId, newText, newImage, newVideo) => {
    firebase
      .firestore()
      .collection("messages")
      .doc(roomId)
      .collection("chat")
      .add({
        sendAt: firebase.firestore.Timestamp.fromDate(new Date()),
        text: newText,
        imageURI: newImage,
        videoURI: newVideo,
        sender: userId,
      });
    firebase.firestore().collection("messages").doc(roomId).set({
      previewMsg: newText,
    });
  };

  const handleSend = async (messages) => {
    const text = messages[0].text || "";
    const imageURI = messages[0].image || "";
    const videoURI = messages[0].video || "";

    sendToFirebase(user.id, text, imageURI, videoURI);
  };

  const renderMessageVideo = (props) => {
    const { currentMessage } = props;
    return (
      <View style={{ width: 300, aspectRatio: 16 / 9, padding: 12 }}>
        <WebView
          javaScriptEnabled={true}
          source={{ uri: currentMessage.video }}
          mediaPlaybackRequiresUserAction={true}
          startInLoadingState={<ActivityIndicator />}
        />
      </View>
    );
  };

  // const renderSend = (props) => {
  //   return (
  //     <Send {...props}>
  //       <View style={styles.sendContainer}>
  //         <Icon icon="send-circle" size={32} color="#6646ee" />
  //       </View>
  //     </Send>
  //   );
  // };

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
        renderMessageVideo={renderMessageVideo}
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
