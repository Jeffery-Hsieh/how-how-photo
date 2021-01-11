import React, { useState, useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import _ from "lodash";

import SessionContext from "../../store/context";
import JobList from "../../components/ui/JobList";
import AppSearchBar from "../../components/ui/AppSearchBar";

const SearchJobScreen = ({
  smartMode,
  moveToDetailScreen,
  moveToFilterScreen,
}) => {
  const [searchText, setSearchText] = useState("");

  const [session, setSession] = useContext(SessionContext);

  const { jobs } = session;

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const jobsNeedEmployers = jobs.filter((job) => {
    return job.status == "start";
  });
  const jobsRecommended = smartMode
    ? _.sampleSize(jobsNeedEmployers, 2)
    : jobsNeedEmployers;

  const jobsFiltered = searchText
    ? jobsRecommended.filter((job) => {
        return job.type.includes(searchText);
      })
    : jobsRecommended;

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
    <View style={styles.container}>
      <View style={styles.filterView}>
        <View style={styles.searchView}>
          <AppSearchBar
            value={searchText}
            searchTextChange={handleSearchChange}
          />
        </View>
        <Icon
          type="material-community"
          name="filter"
          onPress={moveToFilterScreen}
        />
      </View>
      <JobList
        jobs={jobsFiltered}
        itemClick={moveToDetailScreen}
        favoriteBtnClick={changeJobStatus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  searchView: {
    flex: 1,
  },
  filterView: {
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SearchJobScreen;
