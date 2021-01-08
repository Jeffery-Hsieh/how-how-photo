import React from "react";
import useGetJobs from "../../hooks/useGetJobs";
import { StyleSheet, ScrollView, Text } from "react-native";
import JobList from "../../components/ui/JobList";

const Favorite = ({ navigation }) => {
  const [jobs, { setStatus }] = useGetJobs("favorite");

  const goToDetailScreen = (id, platform) => {
    navigation.navigate("Detail", { jobId: id, platform: platform });
  };

  return (
    <ScrollView style={styles.jobListView}>
      <JobList jobs={jobs} itemClick={goToDetailScreen} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  jobListView: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default Favorite;
