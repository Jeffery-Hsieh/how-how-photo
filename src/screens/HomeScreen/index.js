import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-paper";
import { Icon } from "react-native-elements";
import useGetJobs from "../../hooks/useGetJobs";

import JobItem from "../../components/JobItem";

const Home = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const topTabBar = [
    { icon: "history", label: "進行中" },
    { icon: "calendar-check-outline", label: "已結案" },
  ];

  const jobs = useGetJobs();

  const goToDetailScreen = (id) => {
    navigation.navigate("Detail", { jobId: id });
  };

  const jobItems = jobs.map((job) => (
    <JobItem
      key={job.id}
      moveToNextScreen={() => goToDetailScreen(job.id)}
      {...job}
    />
  ));

  return (
    <>
      <View style={styles.topBarView}>
        {topTabBar.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={topBarStyle.container}
            setSelectedIndex={() => setSelectedIndex(i)}
          >
            <Icon
              type="material-community"
              name={item.icon}
              containerStyle={topBarStyle.icon}
            />
            <Text style={topBarStyle.text}>{item.label}</Text>
          </TouchableOpacity>
        ))}
        <Divider style={topBarStyle.divider} />
      </View>
      <ScrollView style={styles.jobListView}>{jobItems}</ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topBarView: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topBarIconView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  jobListView: {
    paddingTop: 24,
    paddingHorizontal: 12,
  },
});

const topBarStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#00000012",
  },
  icon: {
    marginRight: 24,
  },
  divider: {
    width: 2,
    height: "100%",
  },
  text: {
    fontSize: 16,
  },
});

export default Home;
