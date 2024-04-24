import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../feature/home/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../feature/profile/Profile";
import LogScreen from "../feature/logs/LogScreen";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigationsConfig = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          ),
          tabBarBadge: 7,
        }}
      />
      <Tab.Screen
        name="LogScreen"
        component={LogScreen}
        options={{
          tabBarLabel: "Logs",
          tabBarIcon: ({ color }) => (
            <Foundation name="results" size={20} color={color} />
          ),
          tabBarBadge: 10,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationsConfig;
