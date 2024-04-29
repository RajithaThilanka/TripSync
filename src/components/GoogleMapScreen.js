import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "./Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "./NavigateCard";
import RideOptionsCard from "./RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const GoogleMapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-1`}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
        >
          <Icon name="menu" style={tw``} />
        </TouchableOpacity>
        <View style={tw`h-1/2`}>
          <Map />
        </View>

        <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GoogleMapScreen;

const styles = StyleSheet.create({});
