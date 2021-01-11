import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

const JobDetailHeader = ({
  id,
  name,
  platform,
  workerNum,
  price,
  avatarDisabled,
  avatarOnPress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.avatarView}
      onPress={avatarOnPress}
      disabled={avatarDisabled}
    >
      <Avatar
        rounded
        containerStyle={styles.avatar}
        size="medium"
        source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 24,
  },
  avatarView: {
    alignItems: "center",
  },
  avatar: {
    marginBottom: 16,
  },
  headerView: {
    marginBottom: 32,
    paddingLeft: 12,
  },
  headerTitle: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: "bold",
  },
  headerText: {
    color: "#979797",
  },
  colView: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    color: "#979797",
  },
});

export default JobDetailHeader;
