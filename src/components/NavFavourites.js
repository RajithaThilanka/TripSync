import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import * as Location from "expo-location";

const NavFavourites = () => {
  const [data, setData] = useState([
    {
      id: 1,
      icon: "home",
      location: "Home",
      destination: "Ihala Imbulgoda, Sri Lanka",
    },
    {
      id: 2,
      icon: "briefcase",
      location: "Work",
      destination: "Itx360, Sri Lanka",
    },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setData((prevData) => [
        ...prevData,
        {
          id: prevData.length + 1,
          icon: "location-sharp",
          location: "Current Location",
          destination: `${location.coords.latitude}, ${location.coords.longitude}`,
        },
      ]);
    })();
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={[tw`h-1 bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View style={tw`ml-2`}>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
