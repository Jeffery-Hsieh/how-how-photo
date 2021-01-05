import React, { useRef, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";

import MessageList from "../../components/chatRoomList/MessageList";
import PopUpMenu from "../../components/chatRoomList/PopUpMenu";
import AppSearchBar from "../../components/ui/AppSearchBar";

import useGetChatRoomPreview from "../../hooks/useGetChatRoomPreview";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const ChatRoomListScreen = ({ navigation }) => {
  const menuRef = useRef();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "all", title: "全部" },
    { key: "unread", title: "未讀" },
  ]);

  const [searchText, setSearchText] = useState("");

  const messagePreview = useGetChatRoomPreview();
  const filteredChatRooms =
    searchText == ""
      ? messagePreview
      : messagePreview.filter((message) => {
          return message.name.includes(searchText);
        });

  const handleSearchChange = (name) => {
    setSearchText(name);
  };

  const setMenuRef = (ref) => {
    menuRef.current = ref;
  };

  const showMenu = () => {
    menuRef.current.show();
  };

  const hideMenu = () => {
    menuRef.current.hide();
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "all":
        return (
          <MessageList
            data={filteredChatRooms}
            chatRoomClick={moveToChatRoom}
          />
        );
      case "unread":
        return (
          <MessageList
            data={filteredChatRooms}
            chatRoomClick={moveToChatRoom}
          />
        );
      default:
        return null;
    }
  };

  const moveToChatRoom = (id) => {
    navigation.navigate("Chat", { roomId: ROOMID });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <AppSearchBar
          value={searchText}
          searchTextChange={handleSearchChange}
          containerStyle={styles.searchBarView}
        />
        <PopUpMenu
          setMenuRef={setMenuRef}
          showMenu={showMenu}
          hideMenu={hideMenu}
        />
      </View>
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
    </View>
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
  searchBarView: {
    flex: 1,
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
});

export default ChatRoomListScreen;
