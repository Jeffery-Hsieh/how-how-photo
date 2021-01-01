import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import MessageList from "../../components/ChatRoomList/MessageList";

import useGetChatRoomPreview from "../../hooks/useGetChatRoomPreview";

const ChatRoomListScreen = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "all", title: "全部" },
    { key: "unread", title: "未讀" },
  ]);

  const messagePreview = useGetChatRoomPreview();

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "all":
        return (
          <MessageList data={messagePreview} chatRoomClick={moveToChatRoom} />
        );
      case "unread":
        return <MessageList data={messagePreview} />;
      default:
        return null;
    }
  };

  const moveToChatRoom = (id) => {
    navigation.navigate("Chat", { roomId: id });
  };

  return (
    <>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: "#ffffff" }}
            indicatorStyle={{ backgroundColor: "black" }}
            tabStyle={styles.tabBarView}
            labelStyle={styles.tabBarLabel}
          />
        )}
        navigationState={{ index: index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={styles.tabBarContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  tabBarContainer: {
    width: Dimensions.get("window").width,
  },
  tabBarView: {
    flexDirection: "row",
  },
  tabBarLabel: {
    color: "#000000",
  },
});

export default ChatRoomListScreen;
