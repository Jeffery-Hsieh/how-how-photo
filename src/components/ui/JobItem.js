import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import AppBtn from "./AppBtn";
import IconWithText from "./IconWithText";

const icons = {
  line: require("../../assets/icons/line.png"),
  fb: require("../../assets/icons/facebook.png"),
  instagram: require("../../assets/icons/instagram.png"),
};

const JobItem = ({
  id,
  title,
  workers,
  sendAt,
  start_time,
  end_time,
  platform,
  location,
  email,
  status,
  moveToNextScreen,
}) => {
  const showFavoriteIcon = status == "start" || status == "favorite";
  const unCommentedWorker = workers.filter((worker) => {
    return !worker["hasReview"];
  });
  const showUnCommentIndicator =
    status == "finished" && unCommentedWorker.length > 0;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardView} onPress={moveToNextScreen}>
        <Avatar
          rounded
          containerStyle={styles.avatar}
          size="large"
          source={{ uri: `https://i.pravatar.cc/300?img=${id}` }}
        />
        <View style={styles.infoView}>
          <View style={styles.titleView}>
            <Image source={icons[platform]} />
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          </View>
          <IconWithText
            iconName="clock-time-three-outline"
            text={`${start_time || sendAt} ~ ${end_time}`}
          />
          <IconWithText iconName="map-marker" text={location} />
          <IconWithText iconName="email-send-outline" text={email} />
        </View>
      </TouchableOpacity>
      {showFavoriteIcon && (
        <View style={styles.othersBtnView}>
          <AppBtn
            text="收藏"
            isSelected={status == "favorite"}
            selectedColor="#B9B8B7"
          />
          <AppBtn text="應徵" />
        </View>
      )}
      {showUnCommentIndicator && (
        <View style={styles.othersBtnView}>
          <AppBtn
            containerStyle={{ backgroundColor: "#FD9494" }}
            text={`尚有${unCommentedWorker.length}人未評價`}
            isSelected={status == "favorite"}
            selectedColor="#B9B8B7"
            disabled={true}
          />
        </View>
      )}
      <View style={styles.goToDetailView}>
        <Icon
          type="material-community"
          name="chevron-right"
          onPress={moveToNextScreen}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: "center",
    backgroundColor: "#C6DCDC",
    borderRadius: 8,
    marginBottom: 24,
    paddingVertical: 8,
  },
  cardView: {
    flex: 5,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    marginHorizontal: 16,
  },
  infoView: {
    flex: 1,
    justifyContent: "space-around",
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
  icon: {
    marginRight: 4,
  },
  othersBtnView: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  goToDetailView: {
    position: "absolute",
    top: "50%",
    right: 8,
  },
});

export default JobItem;
