import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import JobList from "../../components/ui/JobList";
import AppSearchBar from "../../components/ui/AppSearchBar";

const SearchJobScreen = ({ jobs, moveToDetailScreen, moveToFilterScreen }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const filteredJobsByText = searchText
    ? jobs.filter((job) => {
        return job.type.includes(searchText);
      })
    : jobs;

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
      <JobList jobs={filteredJobsByText} itemClick={moveToDetailScreen} />
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
