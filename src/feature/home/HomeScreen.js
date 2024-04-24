import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../../components/NavOptions";
import { Button } from "@rneui/themed";

const HomeScreen = ({ route, navigation }) => {
  const homeLogo = require("../../../assets/homelogo.jpg");
  // const { name } = route.params;

  // useLayoutEffect(() => {
  //   navigation.setOptions({ title: name });
  // });

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-10`}>
        <Image
          source={homeLogo}
          style={{ width: 200, height: 200, alignItems: "center" }}
        />
        <Text style={styles.textStyle}>Trip Sync</Text>

        <NavOptions />
        <Button
          title="Toggle Drawer"
          onPress={() => navigation.toggleDrawer()}
        />
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
  headerTextStyle: {
    fontSize: 20,
    marginBottom: 20,
  },
});
