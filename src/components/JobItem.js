import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Icon, Avatar } from "react-native-elements";

const JobItem = ({
  id,
  title,
  sendAt,
  start_time,
  end_time,
  platform,
  location,
  contact,
  moveToNextScreen,
}) => (
  <View style={styles.container}>
    <Avatar
      rounded
      containerStyle={styles.avatar}
      size="large"
      source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
    />
    <View style={styles.description}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rowView}>
        <Icon
          type="material-community"
          containerStyle={styles.icon}
          name="clock-time-three-outline"
        />
        <Text>{`${start_time || sendAt} ~`}</Text>
        <Text>{end_time}</Text>
      </View>
      <View style={styles.rowView}>
        <Icon
          type="material-community"
          containerStyle={styles.icon}
          name="map-marker"
          size={20}
        />
        <Text>{location}</Text>
      </View>
      <View style={styles.rowView}>
        <Icon
          type="material-community"
          containerStyle={styles.icon}
          name="phone"
          size={20}
        />
        <Text>{contact}</Text>
      </View>
    </View>
    <Icon
      type="material-community"
      containerStyle={styles.rightBtn}
      name="chevron-right"
      onPress={moveToNextScreen}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C6DCDC",
    borderRadius: 8,
    marginBottom: 24,
    paddingLeft: 8,
  },
  avatar: {
    marginRight: 16,
  },
  description: {
    flex: 1,
    justifyContent: "space-around",
    marginLeft: 12,
  },
  title: {
    color: "#120E21",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 12,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  rightBtn: {
    marginRight: 20,
  },
});

export default JobItem;
