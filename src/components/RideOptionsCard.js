import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState();
  const traveTimeInformation = useSelector(selectTravelTimeInformation);
  const data = [
    {
      id: "Uber-X-001",
      title: "Tuk",
      multiplier: 0.75,
      image: require("../../assets/tuktuk.png"),
    },
    {
      id: "Uber-X-123",
      title: "Car",
      multiplier: 1,
      image: require("../../assets/smallcar.png"),
    },
    {
      id: "Uber-XL-456",
      title: "Car",
      multiplier: 1.2,
      image: require("../../assets/car.png"),
    },
    {
      id: "Uber-LUX-789",
      title: "Van",
      multiplier: 1.75,
      image: require("../../assets/van.png"),
    },
  ];

  const ListHeader = () => (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
      >
        <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride - {traveTimeInformation?.distance?.text}
      </Text>
    </View>
  );

  const ListFooter = () => (
    <TouchableOpacity
      disabled={!selected}
      style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
    >
      <Text style={tw`text-center text-white text-xl`}>
        Choose {selected?.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <FlatList
        data={data}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              source={item.image}
              style={{ width: 100, height: 100, resizeMode: "contain" }}
            />
            <View style={tw`ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text style={tw`text-xl font-semibold`}>
                {traveTimeInformation?.duration?.text}
              </Text>
            </View>
            <Text style={tw`text-xl font-semibold`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "LKR",
              }).format(
                (traveTimeInformation?.distance?.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;
