import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import Menu, { MenuItem } from "react-native-material-menu";
import ChatReply from "./ChatReply";

const menus = [
  {
    title: "自我介紹",
    text: "Nice! Sorry for the spelling mistakes, the text was preety old",
    isEnabled: true,
  },
  {
    title: "作品集連結",
    text: "http://nijnojpq\n這是我經歷了上次的...",
    isEnabled: true,
  },
  { title: "風格類型", text: "什麼風格我都願意測試", isEnabled: true },
];

const PopUpMenu = ({ setMenuRef, showMenu, hideMenu }) => {
  return (
    <Menu
      ref={setMenuRef}
      button={
        <Icon
          type="material-community"
          name="dots-vertical"
          onPress={showMenu}
        />
      }
      style={styles.menuView}
    >
      <Icon
        style={styles.menuCloseBtn}
        type="material-community"
        name="close-circle"
        onPress={hideMenu}
      />
      <View style={styles.menuHeaderView}>
        <Text style={styles.menuHeaderText}>自動回覆設定</Text>
      </View>
      <ScrollView contentContainerStyle={styles.menuItemView}>
        {menus.map((menu) => {
          const { title, text, isEnabled } = menu;
          return (
            <ChatReply
              key={title}
              title={title}
              text={text}
              isEnabled={isEnabled}
            />
          );
        })}
      </ScrollView>
    </Menu>
  );
};

const styles = StyleSheet.create({
  menuView: {
    width: 300,
    height: 500,
  },
  menuCloseBtn: {
    alignSelf: "flex-end",
    marginRight: 8,
    marginTop: 8,
  },
  menuHeaderView: {
    padding: 20,
    alignItems: "center",
  },
  menuHeaderText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  menuItemView: {
    flex: 1,
  },
});

export default PopUpMenu;
