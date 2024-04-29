import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";

const NavFavourites = () => {
  const data = [
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
  ];

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
