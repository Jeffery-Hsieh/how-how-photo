import React, { useState, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View, TextInput } from "react-native";
import { Icon } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";

import useGetJobs from "../../hooks/useGetJobs";
import JobList from "../../components/ui/JobList";
import AppSearchBar from "../../components/ui/AppSearchBar";
import jobsHack from "../../constants/jobs.json";
import _ from "lodash";

const SearchScreen = ({ navigation, route }) => {
  const [jobs, { setJobs }] = useGetJobs("start");
  const [searchText, setSearchText] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          type="material-community"
          name="head-snowflake-outline"
          style={{ marginRight: 12 }}
          onPress={() => {
            setJobs([jobsHack[2]]);
          }}
        />
      ),
      headerLeft: () => (
        <Icon
          type="material-community"
          name="restore"
          style={{ marginLeft: 12 }}
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Search" }],
              })
            );
          }}
        />
      ),
    });
  }, [navigation]);

  const filteredJobsByTags = route.params ? [jobs[0], jobs[1]] : jobs;

  const filteredJobsByText = searchText
    ? filteredJobsByTags.filter((job) => {
        return job.title.includes(searchText);
      })
    : filteredJobsByTags;

  const moveToFilter = () => navigation.navigate("Filter");

  const moveToDetail = (id, platform) =>
    navigation.navigate("Detail", { jobId: id, platform: platform });

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.filterView}>
        <View style={styles.searchView}>
          <AppSearchBar
            value={searchText}
            searchTextChange={handleSearchChange}
          />
        </View>
        <Icon type="material-community" name="filter" onPress={moveToFilter} />
      </View>
      <JobList jobs={filteredJobsByText} itemClick={moveToDetail} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
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

export default SearchScreen;
