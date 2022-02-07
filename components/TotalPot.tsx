import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

interface LottoPot {
  amount: number;
  amountAddresses: number;
}

const TotalPot = (props: LottoPot) => {
  const { amount, amountAddresses } = props;
  return (
    <LottieView
      autoPlay
      style={styles.container}
      source={require("../assets/confetti.json")}
    >
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Total jackpot{" "}
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>${amount} </Text>
      </Text>
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Total addresses{" "}
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          {amountAddresses}
        </Text>
      </Text>
    </LottieView>
  );
};

export default TotalPot;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    // backgroundColor: "#f2f2f2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
