import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";
import UserItem from "./UserItem";

const UserList = ({ users, itemClick }) => {
  const items = users.map((user) => {
    const { id } = user;
    return (
      <UserItem key={id} moveToNextScreen={() => itemClick(id)} {...user} />
    );
  });

  if (!items.length) {
    return (
      <View style={styles.warningView}>
        <Text style={styles.warningTitle}>沒有搜尋到符合的接案者</Text>
        <Text style={styles.warningText}>請嘗試其他搜尋關鍵字</Text>
      </View>
    );
  }

  return <ScrollView>{items}</ScrollView>;
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

export default UserList;
