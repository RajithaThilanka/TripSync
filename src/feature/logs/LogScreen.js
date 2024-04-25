import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-elements";

const LogScreen = () => {
  const [deliveries, setDeliveries] = useState([
    {
      id: 1,
      type: "Delivery Status",
      status: "Delivered",
      date: "2023-04-18",
      packageDetails: "2 items, Electronics",
      location: "New York, NY",
      contact: "John Doe, +123456789",
    },
    {
      id: 2,
      type: "Delivery Pending",
      status: "Pending",
      date: "2023-04-19",
      packageDetails: "1 item, Book",
      location: "San Francisco, CA",
      contact: "Jane Smith, +987654321",
    },
    {
      id: 3,
      type: "Delivery Active",
      status: "Active",
      date: "2023-04-20",
      packageDetails: "3 items, Clothes",
      location: "Los Angeles, CA",
      contact: "Alice Johnson, +987654322",
    },
    {
      id: 4,
      type: "Delivery Pending",
      status: "Pending",
      date: "2023-04-20",
      packageDetails: "3 items, Clothes",
      location: "Los Angeles, CA",
      contact: "Alice Johnson, +987654322",
    },
  ]);

  const toggleActiveStatus = (id) => {
    setDeliveries(
      deliveries.map((delivery) => {
        if (
          delivery.id === id &&
          (delivery.status === "Active" || delivery.status === "Inactive")
        ) {
          let newStatus = delivery.status === "Active" ? "Inactive" : "Active";
          return { ...delivery, status: newStatus };
        }
        return delivery;
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
      {deliveries.map((delivery, index) => (
        <Card key={delivery.id} containerStyle={styles.card}>
          <Card.Title>{delivery.type}</Card.Title>
          <Card.Divider />
          <Text style={styles.infoText}>Status: {delivery.status}</Text>
          <Text style={styles.dateText}>Date: {delivery.date}</Text>
          <Text style={styles.infoText}>
            Package: {delivery.packageDetails}
          </Text>
          <Text style={styles.infoText}>Location: {delivery.location}</Text>
          <Text style={styles.infoText}>Contact: {delivery.contact}</Text>
          {delivery.status !== "Delivered" && (
            <Button
              title={`Mark as ${
                delivery.status === "Pending"
                  ? "Active"
                  : delivery.status === "Active"
                  ? "Inactive"
                  : "Delivered"
              }`}
              onPress={() => {
                if (delivery.status === "Pending") {
                  toggleActiveStatus(delivery.id, "Active");
                } else {
                  toggleActiveStatus(delivery.id);
                }
              }}
              buttonStyle={styles.buttonStyle}
              containerStyle={styles.buttonContainer}
            />
          )}
        </Card>
      ))}
    </ScrollView>
  );
};

export default LogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    margin: 10,
  },
  dateText: {
    fontSize: 12,
    color: "grey",
    marginTop: 5,
  },
  infoText: {
    fontSize: 14,
    color: "black",
    marginBottom: 5,
  },
  buttonStyle: {
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
    width: "50%",
    alignSelf: "center",
  },
});
