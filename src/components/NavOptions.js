import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const NavOptions = () => {
  const image1 = require("../../assets/car.png");
  const image2 = require("../../assets/image04.jpg");

  const data = [
    {
      id: 1,
      title: "Get a ride",
      image: image1,
      screen: "GoogleMapScreen",
    },
    {
      id: 2,
      title: "Order food",
      image: image2,
      screen: "GoogleMapScreen",
    },
  ];
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 m-2 `}
          // disabled={!origin}
        >
          <View
            style={tw`bg-white rounded-lg shadow-lg p-2 items-center justify-center`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={item.image}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
