import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import { useDispatch, useSelector } from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination || !mapRef.current) return;

    if (mapRef.current.fitToSuppliedMarkers) {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, bottom: 50, left: 50, right: 50 },
        animated: true,
      });
    }
  }, [origin, destination, mapRef]);

  if (!origin) {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text>Origin not set please select a location</Text>
        </View>
      </View>
    );
  }
  useEffect(() => {
    const getTravelTime = async () => {
      if (!origin || !destination) return;
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&units=imperial&key=${GOOGLE_MAPS_APIKEY}`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
      } catch (error) {
        console.error(error);
      }
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor="black"
          strokeWidth={3}
          mode="DRIVING"
          optimizeWaypoints={true}
          region="LK"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
          pinColor="green"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  centered: {
    alignItems: "center",
  },
});
