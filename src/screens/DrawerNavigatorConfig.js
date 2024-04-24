import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SettingScreen from "../feature/settings/Settings";
import DashbordScreen from "../feature/dashbord/Dashbord";
import TabNavigationsConfig from "./TabNavigationsConfig";

const Drawer = createDrawerNavigator();

const DrawerNavigatorConfig = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        maginTop: 0,
        drawerStyle: {
          backgroundColor: "#006064",
          width: 240,
        },
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#ccc",
        drawerLabelStyle: {
          marginLeft: 5,
          fontSize: 15,
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: "#006064",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen name="HomeScreen" component={TabNavigationsConfig} />
      <Drawer.Screen name="Dashboard" component={DashbordScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorConfig;
