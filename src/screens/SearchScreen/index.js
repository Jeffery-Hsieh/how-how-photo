import React, { useState } from "react";
import { ScrollView, StyleSheet, View, TextInput } from "react-native";
import useGetJobs from "../../hooks/useGetJobs";
import JobList from "../../components/ui/JobList";
import { Icon } from "react-native-elements";
import AppSearchBar from "../../components/ui/AppSearchBar";
import _ from "lodash";

const SearchScreen = ({ navigation, route }) => {
  const [jobs] = useGetJobs("start");
  const [searchText, setSearchText] = useState("");

  const filteredJobsByTags = route.params ? _.sampleSize(jobs, 2) : jobs;

  const filteredJobsByText = searchText
    ? filteredJobsByTags.filter((job) => {
        return job.title.includes(searchText);
      })
    : filteredJobsByTags;

  const moveToFilter = () => navigation.navigate("Filter");

  const moveToDetail = () => navigation.navigate("Detail");

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
