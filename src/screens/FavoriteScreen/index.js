import React, { useContext } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";

import JobList from "../../components/ui/JobList";
import SessionContext from "../../store/context";

const Favorite = ({ navigation }) => {
  const [session, setSession] = useContext(SessionContext);

  const { user, jobs } = session;

  console.log(user);

  const jobsFavorite = jobs.filter((job) => {
    return job.status == "favorite";
  });

  const goToDetailScreen = (id, platform) => {
    navigation.navigate("Detail", { jobId: id, platform: platform });
  };

  const changeJobStatus = (jobId) => {
    const newJobs = [...jobs];
    newJobs.forEach((job, index) => {
      if (job.id == jobId) {
        const newStatus = job.status == "favorite" ? "start" : "favorite";
        newJobs[index].status = newStatus;
      }
    });
    setSession({ ...session, jobs: newJobs });
  };

  return (
    <ScrollView style={styles.jobListView}>
      <JobList
        jobs={jobsFavorite}
        itemClick={goToDetailScreen}
        favoriteBtnClick={changeJobStatus}
      />
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
