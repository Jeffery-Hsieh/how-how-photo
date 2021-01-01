import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";
import JobItem from "./JobItem";

const JobList = ({ jobs, itemClick }) => {
  const jobItems = jobs.map((job) => (
    <JobItem key={job.id} moveToNextScreen={() => itemClick(job.id)} {...job} />
  ));

  if (!jobItems.length) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <ScrollView style={styles.container}>{jobItems}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
});

export default JobList;
