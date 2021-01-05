import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import AppBtn from "./AppBtn";

const icons = {
  line: require("../../assets/icons/line.png"),
  fb: require("../../assets/icons/facebook.png"),
  instagram: require("../../assets/icons/instagram.png"),
};

const JobItem = ({
  id,
  title,
  sendAt,
  start_time,
  end_time,
  platform,
  location,
  phone,
  status,
  review,
  isFavorite,
  moveToNextScreen,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={moveToNextScreen}>
      <Avatar
        rounded
        containerStyle={styles.avatar}
        size="large"
        source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
      />
      <View style={styles.description}>
        <View style={styles.titleView}>
          <Image source={icons[platform]} />
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {status == "finished" && review.length < 3 && (
            <AppBtn
              text={3 - review.length}
              containerStyle={styles.reminderTagContainer}
              tagStyle={styles.reminderText}
            />
          )}
        </View>
        <View style={styles.rowView}>
          <Icon
            type="material-community"
            containerStyle={styles.icon}
            color="#787885"
            name="clock-time-three-outline"
            size={24}
          />
          <Text>{`${start_time || sendAt} ~`}</Text>
          <Text>{end_time}</Text>
        </View>
        <View style={styles.rowView}>
          <Icon
            type="material-community"
            containerStyle={styles.icon}
            name="map-marker"
            color="#787885"
            size={24}
          />
          <Text>{location}</Text>
        </View>
        <View style={styles.rowView}>
          <Icon
            type="material-community"
            containerStyle={styles.icon}
            name="phone"
            color="#787885"
            size={24}
          />
          <Text>{phone}</Text>
        </View>
      </View>
      <Icon
        type="material-community"
        style={styles.rightBtn}
        name="chevron-right"
        onPress={moveToNextScreen}
      />
      {status == "start" && (
        <View style={styles.othersBtnView}>
          <AppBtn text="收藏" />
          <AppBtn text="應徵" />
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 160,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C6DCDC",
    borderRadius: 8,
    marginBottom: 24,
    paddingVertical: 8,
  },
  avatar: {
    marginHorizontal: 16,
  },
  description: {
    flex: 1,
    justifyContent: "space-around",
  },
  icon: {
    width: 30,
    height: 30,
  },
  titleView: {
    flex: 1,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    maxWidth: 200,
    color: "#120E21",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 4,
  },
  reminderTagContainer: {
    paddingHorizontal: 1,
    paddingVertical: 1,
    height: 20,
    width: 20,
  },
  reminderText: {
    fontSize: 12,
  },
  rowView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  icon: {
    marginRight: 4,
  },
  rightBtn: {
    marginRight: 20,
  },
  othersBtnView: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 8,
  },
});

export default JobItem;
