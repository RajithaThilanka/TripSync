import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../../components/NavOptions";
import PlaceHolder from "../../components/PlaceHolder";
import NavFavourites from "../../components/NavFavourites";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.safeArea, tw`bg-white`]}>
      <View style={tw`p-10`}>
        <PlaceHolder />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    color: "#333",
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007bff",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
