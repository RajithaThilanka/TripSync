import React from "react";
import HomeScreen from "../feature/home/HomeScreen";
import MapScreen from "../components/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../feature/login/Login";

const Stack = createStackNavigator();

const StackNavigatorConfig = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorConfig;
