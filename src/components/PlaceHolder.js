import React from "react";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { SafeAreaView } from "react-native-safe-area-context";

const PlaceHolder = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <GooglePlacesAutocomplete
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
          );
          dispatch(setDestination(null));
        }}
        styles={{
          container: styles.inputContainer,
          textInput: styles.textInput,
          listView: styles.listView,
          description: styles.description,
          row: styles.row,
          separator: styles.separator,
          poweredContainer: styles.poweredContainer,
          powered: styles.powered,
        }}
        placeholder="Where from?"
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        fetchDetails={true}
        onFail={(error) => console.error(error)}
        enablePoweredByContainer={false}
        minLength={2}
      />
    </SafeAreaView>
  );
};

export default PlaceHolder;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 0,
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#FFF",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
  },
  listView: {
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  description: {
    fontSize: 16,
  },
  row: {
    padding: 10,
    minHeight: 58,
  },
  separator: {
    height: 1,
    backgroundColor: "#DDD",
  },
  poweredContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 5,
  },
  powered: {
    fontSize: 10,
  },
});
