import React from "react";
import { View, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

import jobs from "../../constants/jobs.json";
import JobDetailSubHeader from "../../components/jobDetail/SubHeader";
import JobDetailHeader from "../../components/jobDetail/Header";
import JobDescription from "../../components/jobDetail/JobDescription";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const JobFromOthers = ({ jobId, moveToProfileScreen, moveToChatScreen }) => {
  const filteredJob = jobs.filter((job) => {
    return job.id === jobId;
  })[0];

  const { facebookId, lineId, platform, description, sender } = filteredJob;

  return (
    <View style={styles.container}>
      <JobDetailHeader
        id={jobId}
        name={sender}
        platform={platform.toUpperCase()}
        workerNum={"-"}
        price={"-"}
        avatarDisabled={true}
      />
      <JobDetailSubHeader
        id={jobId}
        facebookId={facebookId}
        lineId={lineId}
        moveToChatScreen={moveToChatScreen}
      />

      <Divider />
      <JobDescription text={description} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default JobFromOthers;
