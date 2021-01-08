import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { TabView } from "react-native-tab-view";
import { TabBar } from "react-native-tab-view";

import JobList from "../../components/ui/JobList";
import useGetJobs from "../../hooks/useGetJobs";

const JobListScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "proceeding", title: "進行中" },
    { key: "finished", title: "已結案" },
  ]);

  const [jobs, { setStatus }] = useGetJobs(routes[index].key);

  const moveToDetail = (id, platform) =>
    navigation.navigate("Detail", { jobId: id, platform: platform });

  useEffect(() => {
    setStatus(routes[index].key);
  }, [index]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "proceeding":
        return (
          <ScrollView style={styles.jobListView}>
            <JobList jobs={jobs} itemClick={moveToDetail} />
          </ScrollView>
        );
      case "finished":
        return (
          <ScrollView style={styles.jobListView}>
            <JobList jobs={jobs} itemClick={moveToDetail} />
          </ScrollView>
        );
      default:
        return null;
    }
  };

  const getTabBarIcon = (props) => {
    const { route } = props;
    if (route.key === "proceeding") {
      return <Icon type="material-community" name="history" size={30} />;
    } else {
      return (
        <Icon
          type="material-community"
          name="calendar-check-outline"
          size={30}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: "#ffffff" }}
            indicatorStyle={{ backgroundColor: "black" }}
            tabStyle={styles.tabBarView}
            labelStyle={styles.tabBarLabel}
            renderIcon={(props) => getTabBarIcon(props)}
          />
        )}
        navigationState={{ index: index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={styles.tabBarContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarContainer: {
    width: Dimensions.get("window").width,
  },
  tabBarView: {
    flexDirection: "row",
  },
  tabBarLabel: {
    color: "#000000",
  },
  jobListView: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default JobListScreen;
