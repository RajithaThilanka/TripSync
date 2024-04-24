import React from "react";
import MapScreen from "../components/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../feature/login/Login";
import { Alert, Pressable, Text } from "react-native";

import DrawerNavigatorConfig from "./DrawerNavigatorConfig";

const Stack = createStackNavigator();

const StackNavigatorConfig = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      // screenOptions={{
      //   headerStyle: { backgroundColor: "#006064" },
      //   headerTintColor: "#FFFFFF",
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //   },
      //   headerRight: () => (
      //     <Pressable onPress={() => Alert.alert("Menu button pressed!")}>
      //       <Text style={{ color: "#FFFFFF", fontSize: 20, marginRight: 20 }}>
      //         Menu
      //       </Text>
      //     </Pressable>
      //   ),
      // }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainScreen"
        component={DrawerNavigatorConfig}
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
    </Stack.Navigator>
  );
};

export default StackNavigatorConfig;
