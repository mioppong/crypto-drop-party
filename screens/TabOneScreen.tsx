import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EachTransaction from "../components/EachTransaction";

import EditScreenInfo from "../components/EditScreenInfo";
import Label from "../components/Label";
import SwitchNetWork from "../components/SwitchNetWork";
import { Text, View } from "../components/Themed";
import TotalPot from "../components/TotalPot";
import { RootTabScreenProps } from "../types";

const date = new Date();
const currentTransactions = [
  {
    key: "1",
    sent: 1,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
    received: "0x045345325345",
  },
  {
    key: "2",
    sent: 2.5,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
    received: "0x045345325345",
  },
  {
    key: "3",
    sent: 3.2,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
    received: "0x045345325345",
  },
  {
    key: "fdg1",
    sent: 4.1,
    address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
    received: "0x045345325345",
  },
];
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Dashboard">) {
  const totalAmount = currentTransactions.reduce((a, b) => a + b.sent, 0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setTimeout(() => {
    //   getDataData();
    // }, 10000);
  }, []);

  const getDataData = async () => {
    const url = `https://api.covalenthq.com/v1/1/address/0x120100a7AC7F9fe9F71D8C59E9131d75A11BAA56/transactions_v2/?key=ckey_2137ac3974164c95be8152a8cf6`;
    const response = await axios.get(url).catch((errr) => {
      setLoading(false);
      console.log();
    });

    console.log("response is", response.data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SwitchNetWork />
      <TotalPot
        amount={totalAmount}
        amountAddresses={currentTransactions.length}
      />
      <Text style={styles.title}>Most Recent Transactions</Text>
      <View style={styles.buttonsContainer}>
        <Label text="Address" />
        <Label text="Amount Sent" />
      </View>
      <FlatList
        keyExtractor={(item) => item.key}
        data={currentTransactions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <EachTransaction
            key={index}
            address={item.address}
            sent={item.sent}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    padding: 10,
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
