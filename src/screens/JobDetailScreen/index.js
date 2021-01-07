import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import JobFromPlatform from "./JobFromPlatform";
import JobFromOthers from "./JobFromOthers";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const JobDetailScreen = ({ navigation, route }) => {
  const { jobId, platform } = route.params;

  const moveToRatingSreen = () => {
    navigation.navigate("Rating");
  };

  const moveToChatScreen = (event) => {
    navigation.navigate("Chat", { roomId: ROOMID });
  };

  return platform == "self" ? (
    <JobFromPlatform
      jobId={jobId}
      moveToChatScreen={moveToChatScreen}
      moveToRatingScreen={moveToRatingSreen}
    />
  ) : (
    <JobFromOthers id={jobId} />
  );
};

export default JobDetailScreen;
