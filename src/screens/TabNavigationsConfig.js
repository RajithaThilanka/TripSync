import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../feature/home/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../feature/profile/Profile";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import ActivitiesScreen from "../feature/activities/Activities";
import ServicesScreen from "../feature/services/Services";

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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{
          tabBarLabel: "Services",
          tabBarIcon: ({ color }) => (
            <Entypo name="grid" size={24} color="black" />
          ),
          tabBarBadge: 7,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ActivitiesScreen"
        component={ActivitiesScreen}
        options={{
          tabBarLabel: "Activities",
          tabBarIcon: ({ color }) => (
            <Foundation name="results" size={20} color={color} />
          ),
          tabBarBadge: 10,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationsConfig;
