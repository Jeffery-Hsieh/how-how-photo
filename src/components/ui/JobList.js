import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView } from "react-native";
import JobItem from "./JobItem";

const JobList = ({ jobs, itemClick, favoriteBtnClick }) => {
  const jobItems = jobs.map((job) => {
    const { id, platform } = job;
    return (
      <JobItem
        key={job.id}
        moveToNextScreen={() => itemClick(id, platform)}
        favoriteBtnClick={() => favoriteBtnClick(id)}
        {...job}
      />
    );
  });

  if (!jobItems.length) {
    return (
      <View style={styles.warningView}>
        <Text style={styles.warningTitle}>沒有搜尋到符合的案件</Text>
        <Text style={styles.warningText}>請嘗試其他搜尋關鍵字</Text>
      </View>
    );
  }

  return <ScrollView>{jobItems}</ScrollView>;
};

const styles = StyleSheet.create({
  warningView: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: "60%",
  },
  warningTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

export default JobList;
