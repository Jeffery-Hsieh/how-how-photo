import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { SessionProvider } from "./store/context";

import JobListScreen from "./screens/JobListScreen";
import JobDetailScreen from "./screens/JobDetailScreen";
import UserRatingScreen from "./screens/UserRatingScreen";

import SearchScreen from "./screens/SearchScreen";
import SearchFilterScreen from "./screens/SearchFilterScreen";

import FavoriteScreen from "./screens/FavoriteScreen";

import ChatRoomListScreen from "./screens/ChatRoomListScreen";
import ChatRoomScreen from "./screens/ChatRoomScreen";

import ProfileScreen from "./screens/ProfileScreen";
import AddPortfolioScreen from "./screens/AddPortfolioScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const SearchStack = () => (
  <Stack.Navigator initialRouteName="Search">
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ title: "尋找" }}
    />
    <Stack.Screen
      name="Filter"
      component={SearchFilterScreen}
      options={{ title: "搜尋條件" }}
    />
    <Stack.Screen
      name="Detail"
      component={JobDetailScreen}
      options={{ title: "詳細內容" }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: "介紹" }}
    />
    <Stack.Screen
      name="Rating"
      component={UserRatingScreen}
      options={{ title: "評價" }}
    />
    <Stack.Screen
      name="Chat"
      component={ChatRoomScreen}
      options={{ title: "" }}
    />
  </Stack.Navigator>
);

const JobStack = () => (
  <Stack.Navigator initialRouteName="Find Jobs">
    <Stack.Screen
      name="Find Jobs"
      component={JobListScreen}
      options={{ title: "我的案子" }}
    />
    <Stack.Screen
      name="Detail"
      component={JobDetailScreen}
      options={{ title: "詳細內容" }}
    />
    <Stack.Screen
      name="Chat"
      component={ChatRoomScreen}
      options={{ title: "" }}
    />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator initialRouteName="Favorite">
    <Stack.Screen
      name="Favorite"
      component={FavoriteScreen}
      options={{ title: "收藏" }}
    />
    <Stack.Screen
      name="Detail"
      component={JobDetailScreen}
      options={{ title: "詳細內容" }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: "介紹" }}
    />

    <Stack.Screen
      name="Chat"
      component={ChatRoomScreen}
      options={{ title: "" }}
    />
  </Stack.Navigator>
);

const MessageStack = () => (
  <Stack.Navigator initialRouteName="Favorite">
    <Stack.Screen
      name="Message"
      component={ChatRoomListScreen}
      options={{ title: "聊天室" }}
    />
    <Stack.Screen
      name="Chat"
      component={ChatRoomScreen}
      options={{ title: "" }}
    />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator initialRouteName="Profile">
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: "個人資料" }}
    />
    <Stack.Screen
      name="Add Portfolio"
      component={AddPortfolioScreen}
      options={{ title: "新增作品集" }}
    />
    <Stack.Screen
      name="Rating"
      component={UserRatingScreen}
      options={{ title: "評價" }}
    />
  </Stack.Navigator>
);

const BottomTabNavigator = () => (
  <Tab.Navigator initialRouteName="Search">
    <Tab.Screen
      name="Search"
      component={SearchStack}
      options={{ tabBarIcon: "magnify" }}
    />
    <Tab.Screen
      name="Jobs"
      component={JobStack}
      options={{ tabBarIcon: "briefcase" }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteStack}
      options={{ tabBarIcon: "heart-outline" }}
    />
    <Tab.Screen
      name="Message"
      component={MessageStack}
      options={{ tabBarIcon: "facebook-messenger" }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStack}
      options={{ tabBarIcon: "account" }}
    />
  </Tab.Navigator>
);

const routes = () => (
  <SessionProvider>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  </SessionProvider>
);

export default routes;
