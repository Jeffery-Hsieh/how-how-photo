import React from "react";
import { View, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

import jobs from "../../constants/jobs.json";
import JobDetailSubHeader from "../../components/jobDetail/SubHeader";
import JobDetailHeader from "../../components/jobDetail/Header";
import JobDescription from "../../components/jobDetail/JobDescription";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const JobFromOthers = ({ jobId, moveToProfileScreen }) => {
  const filteredJob = jobs.filter((job) => {
    return job.id === jobId;
  })[0];

  const {
    facebookId,
    lineId,
    phone,
    platform,
    description,
    sender,
  } = filteredJob;

  return (
    <View style={styles.container}>
      <JobDetailHeader
        id={jobId}
        name={sender}
        platform={platform.toUpperCase()}
        workerNum={"-"}
        price={"-"}
        avatarOnPress={moveToProfileScreen}
      />
      <JobDetailSubHeader
        id={jobId}
        facebookId={facebookId}
        lineId={lineId}
        phone={phone}
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
