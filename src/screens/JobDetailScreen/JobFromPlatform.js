import React, { useState, useContext } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import { Icon } from "react-native-elements";

import SessionContext from "../../store/context";
import JobInfo from "../../components/jobDetail/JobInfo";
import JobTimeline from "../../components/jobDetail/JobTimeLine";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const JobInPlatform = ({ jobId, moveToProfileScreen, moveToChatScreen }) => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: "detail", title: "詳細內容" },
    { key: "timeline", title: "進度條" },
  ]);

  const [session] = useContext(SessionContext);

  const { jobs } = session;

  const filteredJob = jobs.filter((job) => {
    return job.id == jobId;
  });

  const job = filteredJob[0];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "detail":
        return (
          <JobInfo
            {...job}
            moveToProfileScreen={() => moveToProfileScreen(job.id)}
            moveToChatScreen={moveToChatScreen}
          />
        );
      case "timeline":
        return (
          <JobTimeline
            status={job.status}
            moveToNextScreen={moveToProfileScreen}
          />
        );
      default:
        return null;
    }
  };

  const getTabBarIcon = (props) => {
    const { route } = props;
    if (route.key === "detail") {
      return <Icon type="material-community" name="folder-outline" size={30} />;
    } else {
      return <Icon type="material-community" name="play-outline" size={30} />;
    }
  };

  const { sender, workers, facebookId, lineId, phone } = job;

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
    backgroundColor: "#ffffff",
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
  infoView: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  infoText: {
    fontSize: 18,
  },
});

export default JobInPlatform;
