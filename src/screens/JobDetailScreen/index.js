import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import JobFromPlatform from "./JobFromPlatform";
import JobFromOthers from "./JobFromOthers";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const JobDetailScreen = ({ navigation, route }) => {
  const { jobId, platform } = route.params;

  const moveToProfileScreen = (userId) => {
    navigation.navigate("Profile", { userId: userId });
  };

  const moveToChatScreen = () => {
    navigation.navigate("Chat", { roomId: ROOMID });
  };

  return platform == "self" ? (
    <JobFromPlatform
      jobId={jobId}
      moveToProfileScreen={moveToProfileScreen}
      moveToChatScreen={moveToChatScreen}
    />
  ) : (
    <JobFromOthers
      jobId={jobId}
      moveToProfileScreen={moveToProfileScreen}
      moveToChatScreen={moveToChatScreen}
    />
  );
};

export default JobDetailScreen;
