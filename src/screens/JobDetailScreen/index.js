import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import JobDetailHeader from "../../components/jobDetail/Header";
import JobDetailSubHeader from "../../components/jobDetail/SubHeader";
import JobInfo from "../../components/jobDetail/JobInfo";
import JobTimeline from "../../components/jobDetail/JobTimeLine";

import { TabView, TabBar } from "react-native-tab-view";
import { Icon } from "react-native-elements";

const ROOMID = "W9OwGZS7GIdNc8DyDRd9";

const JobDetailScreen = ({ navigation, route }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "detail", title: "詳細內容" },
    { key: "timeline", title: "進度條" },
  ]);

  const moveToRatingSreen = () => {
    navigation.navigate("Rating");
  };

  const moveToChatScreen = (event) => {
    navigation.navigate("Chat", { roomId: ROOMID });
  };

  const reviewEnabled = route.params && route.params.reviewEnabled;

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "detail":
        return (
          <JobInfo
            reviewEnabled={reviewEnabled}
            moveToNextScreen={moveToRatingSreen}
          />
        );
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

  return (
    <View style={styles.container}>
      <JobDetailHeader
        name={"王老闆"}
        platform={"FB"}
        workerNum={"15"}
        price={"15K"}
      />
      <JobDetailSubHeader
        title={"台北車站宣傳影片"}
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
      <View style={styles.infoView}></View>
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
});

export default JobDetailScreen;
