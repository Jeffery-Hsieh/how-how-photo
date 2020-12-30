import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator initialRouteName="Search">
    <Stack.Screen name="Search" component={SearchScreen} />
  </Stack.Navigator>
);

const FavoriteStack = () => (
  <Stack.Navigator initialRouteName="Favorite">
    <Stack.Screen name="Favorite" component={FavoriteScreen} />
  </Stack.Navigator>
);

const MessageStack = () => (
  <Stack.Navigator initialRouteName="Favorite">
    <Stack.Screen name="Message" component={MessageScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator initialRouteName="Profile">
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{ tabBarIcon: "home-outline" }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStack}
      options={{ tabBarIcon: "magnify" }}
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
      component={FavoriteStack}
      options={{ tabBarIcon: "account" }}
    />
  </Tab.Navigator>
);

const routes = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);

export default routes;
