import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import useGetJobs from "../../hooks/useGetJobs";
import JobList from "../../components/ui/JobList";
import { Icon } from "react-native-elements";

const SearchScreen = ({ navigation }) => {
  const jobs = useGetJobs("start");

  console.log(jobs);
  const moveToFilter = () => navigation.navigate("Filter");

  return (
    <View style={styles.container}>
      <View style={styles.filterView}>
        <View style={styles.searchView}>
          <Icon
            style={styles.searchIcon}
            type="material-community"
            name="magnify"
          />
          <TextInput placeholder="Search" />
        </View>
        <Icon type="material-community" name="filter" onPress={moveToFilter} />
      </View>
      <JobList jobs={jobs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  filterView: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  searchView: {
    width: "90%",
    borderRadius: 20,
    borderColor: "#D9D0E3",
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
});

export default SearchScreen;
