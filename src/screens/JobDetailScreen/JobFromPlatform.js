import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import JobDetailHeader from "../../components/jobDetail/Header";
import JobDetailSubHeader from "../../components/jobDetail/SubHeader";
import JobInfo from "../../components/jobDetail/JobInfo";
import JobTimeline from "../../components/jobDetail/JobTimeLine";
import { TabView, TabBar } from "react-native-tab-view";
import { Icon } from "react-native-elements";
import useGetJobDetail from "../../hooks/useGetJobDetail";
import jobs from "../../constants/jobs.json";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const JobFromPlatform = ({ jobId, moveToChatScreen, moveToRatingScreen }) => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: "detail", title: "詳細內容" },
    { key: "timeline", title: "進度條" },
  ]);

  const filteredJob = jobs.filter((job) => {
    return job.id == jobId;
  });

  const job = filteredJob[0];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "detail":
        return <JobInfo moveToNextScreen={moveToRatingScreen} {...job} />;
      case "timeline":
        return <JobTimeline moveToNextScreen={moveToChatScreen} />;
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

  const { title, sender, workers } = job;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <JobDetailHeader
          id={jobId}
          name={sender}
          platform="HOW"
          workerNum={workers.length}
          price={"15K"}
        />
      </View>
      <JobDetailSubHeader
        title={title}
        startTime={"2020/12/09"}
        endTime={"2020/12/24"}
      />
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
  header: {
    marginBottom: 12,
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
});

export default JobFromPlatform;
