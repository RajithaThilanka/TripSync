import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";

const Loading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#006064" />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#006064",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        Trip Sync
      </Text>
    </View>
  );
};

export default Loading;
