import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import JobDetailHeader from "../../components/jobDetail/Header";
import JobDetailSubHeader from "../../components/jobDetail/SubHeader";
import jobs from "../../constants/jobs.json";

import { Icon, Divider } from "react-native-elements";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const JobFromOthers = ({ id }) => {
  const filteredJob = jobs.filter((job) => {
    return job.id === id;
  })[0];

  const { platform, description, sender } = filteredJob;

  return (
    <View style={styles.container}>
      <JobDetailHeader
        id={id}
        name={sender}
        platform={platform.toUpperCase()}
        workerNum={"-"}
        price={"-"}
      />
      <Divider />
      <ScrollView contentContainerStyle={styles.infoView}>
        <Text style={styles.infoText}>{filteredJob.description}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  infoView: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  infoText: {
    fontSize: 18,
  },
});

export default JobFromOthers;
