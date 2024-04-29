import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../feature/login/Login";
import DrawerNavigatorConfig from "./DrawerNavigatorConfig";
import GoogleMapScreen from "../components/GoogleMapScreen";
import Loading from "../components/Loading";
const Stack = createStackNavigator();

const StackNavigatorConfig = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Stack.Navigator initialRouteName="Loading">
      {loading ? (
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
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
            name="GoogleMapScreen"
            component={GoogleMapScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigatorConfig;
