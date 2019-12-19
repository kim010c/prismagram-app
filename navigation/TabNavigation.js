import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InalRoute: {
      screen: initialRoute,
      navigationOptions: { ...customConfig }
    }
  });

export default createBottomTabNavigator({
  Home: {
    screen: stackFactory(Home, {
      title: "Home",
      headerRight: (
        <TouchableOpacity>
          <Text>Hello</Text>
        </TouchableOpacity>
      )
    })
  },
  Search: {
    screen: stackFactory(Search, {
      title: "Search"
    })
  },
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation")
    }
  },
  Notifications: {
    screen: stackFactory(Notifications, {
      title: "Notifications"
    })
  },
  Profile: {
    screen: stackFactory(Profile, {
      title: "Profile"
    })
  }
});
