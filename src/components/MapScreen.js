import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-10`}>
        <Text style={styles.textStyle}>Map Screen</Text>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearBYPlaceAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    marginBottom: 20,
  },
});
