import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../../components/NavOptions";

const HomeScreen = () => {
  const homeLogo = require("../../../assets/homelogo.jpg");
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-10`}>
        <Image
          source={homeLogo}
          style={{ width: 200, height: 200, alignItems: "center" }}
        />
        <Text style={styles.textStyle}>Trip Sync</Text>

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    marginBottom: 20,
  },
});
