import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../../components/NavOptions";
import { Button } from "@rneui/themed";

const HomeScreen = ({ navigation }) => {
  const homeLogo = require("../../../assets/homelogo.jpg");

  return (
    <SafeAreaView style={[styles.safeArea, tw`bg-white`]}>
      <View style={tw`p-10`}>
        <Image source={homeLogo} style={[styles.logo, tw`self-center`]} />
        <Text style={[styles.title, tw`text-center`]}>Trip Sync</Text>
        <NavOptions />
        {/* <Button
          title="Toggle Drawer"
          onPress={() => navigation.toggleDrawer()}
          buttonStyle={styles.button}
        /> */}
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
