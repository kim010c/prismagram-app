import React from "react";
import { View, Platform, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import MessagesLink from "../components/MessagesLink";
import NavIcon from "../components/NavIcon";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InalRoute: {
      screen: initialRoute,
      navigationOptions: { ...customConfig }
    }
  });

export default createBottomTabNavigator(
  {
    Home: {
      screen: stackFactory(Home, {
        headerRight: <MessagesLink />,
        headerTitle: (
          <Image
            style={{ height: 35 }}
            resizeMode="contain"
            source={require("../assets/instagramlogo.png")}
          ></Image>
        )
      }),
      navigationOptions: {
        tabBarIcon: (
          <NavIcon
            size={30}
            name={Platform.OS === "ios" ? "ios-home" : "md-home"}
          />
        )
      }
    },
    Search: {
      screen: stackFactory(Search, {
        title: "Search"
      }),
      navigationOptions: {
        tabBarIcon: (
          <NavIcon
            size={30}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    },
    Add: {
      screen: View,
      navigationOptions: {
        tabBarOnPress: ({ navigation }) =>
          navigation.navigate("PhotoNavigation"),
        tabBarIcon: (
          <NavIcon
            size={30}
            name={Platform.OS === "ios" ? "ios-add" : "md-add"}
          />
        )
      }
    },
    Notifications: {
      screen: stackFactory(Notifications, {
        title: "Notifications"
      }),
      navigationOptions: {
        tabBarIcon: (
          <NavIcon
            size={30}
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
          />
        )
      }
    },
    Profile: {
      screen: stackFactory(Profile, {
        title: "Profile"
      }),
      navigationOptions: {
        tabBarIcon: (
          <NavIcon
            size={30}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
);
