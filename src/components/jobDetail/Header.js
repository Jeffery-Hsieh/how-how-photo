import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

const JobDetailHeader = ({ id, name, platform, workerNum, price }) => (
  <View style={styles.container}>
    <View style={styles.colView}>
      <Avatar
        rounded
        containerStyle={styles.avatar}
        size="medium"
        source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
    <View style={styles.colView}>
      <Text style={styles.title}>{platform}</Text>
      <Text style={styles.text}>來源</Text>
    </View>
    <View style={styles.colView}>
      <Text style={styles.title}>{workerNum}</Text>
      <Text style={styles.text}>工作人數</Text>
    </View>
    <View style={styles.colView}>
      <Text style={styles.title}>{price}</Text>
      <Text style={styles.text}>費用</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  avatar: {
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
  },
  colView: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#979797",
  },
});

export default JobDetailHeader;
