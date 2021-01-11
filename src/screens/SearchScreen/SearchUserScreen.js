import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Icon } from "react-native-elements";

import useGetUsers from "../../hooks/useGetUsers";
import UserList from "../../components/search/UserList";
import AppSearchBar from "../../components/ui/AppSearchBar";

const SearchUserScreen = ({ moveToProfileScreen }) => {
  const [searchText, setSearchText] = useState("");

  const [users] = useGetUsers();

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const unCompletedPress = () => {
    Alert.alert("此功能目前尚未開放", "", [{ text: "OK" }], {
      cancelable: false,
    });
  };

  const filteredUsersByText = searchText
    ? users.filter((user) => {
        return user.name.includes(searchText);
      })
    : users;

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
          onPress={unCompletedPress}
        />
      </View>
      <UserList users={filteredUsersByText} itemClick={moveToProfileScreen} />
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

export default SearchUserScreen;
