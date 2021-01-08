import React, { useState, useLayoutEffect } from "react";
import { ScrollView, StyleSheet, View, TextInput, Text } from "react-native";
import { Icon } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";
import { TabBar } from "react-native-tab-view";
import { TabView } from "react-native-tab-view";

import useGetJobs from "../../hooks/useGetJobs";
import useGetUsers from "../../hooks/useGetUsers";
import jobsHack from "../../constants/jobs.json";
import SearchJobScreen from "./SearchJobScreen";
import SearchUserScreen from "./SearchUserScreen";
import _ from "lodash";

const SearchScreen = ({ navigation, route }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "findJobs", title: "找案源" },
    { key: "findUsers", title: "找人才" },
  ]);

  const [jobs] = useGetJobs("start");
  const [users] = useGetUsers();
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

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "findJobs":
        return (
          <SearchJobScreen
            jobs={jobs}
            moveToDetailScreen={moveToDetailScreen}
            moveToFilterScreen={moveToFilterScreen}
          />
        );
      case "findUsers":
        return (
          <SearchUserScreen
            users={users}
            moveToProfileScreen={moveToProfileScreen}
          />
        );
      default:
        return null;
    }
  };

  const moveToDetailScreen = (id, platform) =>
    navigation.navigate("Detail", { jobId: id, platform: platform });

  const moveToFilterScreen = () => navigation.navigate("Filter");

  const moveToProfileScreen = (userId) =>
    navigation.navigate("Profile", { userId: userId });

  const getTabBarIcon = (props) => {
    const { route } = props;
    if (route.key === "findJobs") {
      return (
        <Icon
          type="material-community"
          name="briefcase-search-outline"
          size={30}
        />
      );
    } else {
      return (
        <Icon
          type="material-community"
          name="account-search-outline"
          size={30}
        />
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarView: {
    flexDirection: "row",
  },
  tabBarLabel: {
    color: "#000000",
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
