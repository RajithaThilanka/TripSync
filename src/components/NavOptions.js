import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const NavOptions = () => {
  const image1 = require("../../assets/image01.jpg");
  const image2 = require("../../assets/image04.jpg");

  const data = [
    {
      id: 1,
      title: "Get a ride",
      image: image1,
      screen: "MapScreen",
    },
    {
      id: 2,
      title: "Order food",
      image: image2,
      screen: "Login",
    },
  ];
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 m-2 `}
        >
          <Image
            style={{ width: 100, height: 100, padding: "2px" }}
            source={item.image}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
