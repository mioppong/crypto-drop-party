import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import EachBaller from "../components/EachBaller";
import Label from "../components/Label";
import LottieView from "lottie-react-native";

const allBallers = [
  {
    key: "1",
    sent: 10,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
  },
  {
    key: "2",
    sent: 1400,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
  },
  {
    key: "3",
    sent: 9900,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
  },
  {
    key: "fddddg1",
    sent: 144400,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
  },
  {
    key: "fdgfdff1",
    sent: 1444400,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
    received: "0x045345325345",
  },
];
const TabThree = () => {
  return (
    <LottieView
      autoPlay
      style={styles.container}
      source={require("../assets/yerr.json")}
    >
      <View style={styles.buttonsContainer}>
        <Label text="Address" />
        <Label text="Amount Sent" />
      </View>
      <FlatList
        data={allBallers}
        renderItem={({ item }) => (
          <EachBaller address={item.address} sent={item.sent} />
        )}
      />
    </LottieView>
  );
};

export default TabThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    padding: 10,
  },
});
