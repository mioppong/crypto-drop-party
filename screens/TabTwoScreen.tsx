import { FlatList, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import PastItem from "../components/PastItem";
import { Text, View } from "../components/Themed";

const pastTransactions = [
  {
    key: "1",
    totalAmount: 134500,
    received: "0x045345325345",
    datestamp: "1/31/2022",
    transactions: [
      {
        key: "084n",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
      {
        key: "ll",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
      {
        key: "fddsd",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
    ],
  },
  {
    key: "2",
    totalAmount: 103450,
    received: "0x045345325345",
    datestamp: "2/31/2022",
    transactions: [
      {
        key: "rth",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
      {
        key: "rthrt",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
      {
        key: "fsdfgdfdd",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
    ],
  },
  {
    key: "3",
    totalAmount: 104350,
    received: "0x045345325345",
    datestamp: "3/31/2022",
    transactions: [
      {
        key: "fsrthrd",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
      {
        key: "yjyj",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
      {
        key: "fsdfgdfd",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
    ],
  },
  {
    key: "fdg1f",
    totalAmount: 103450,
    received: "0x045345325345",
    datestamp: "4/31/2022",
    transactions: [
      {
        key: "yjy",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
      {
        key: "fsdfsd",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
      {
        key: "fdfgsd",
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        sent: 12,
        received: 34,
      },
    ],
  },
  {
    key: "fdg1",
    totalAmount: 10.8,
    datestamp: "5/31/2022",
    transactions: [
      {
        key: "1",
        sent: 1,
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        received: 1.8,
      },
      {
        key: "2",
        sent: 2.5,
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        received: 7,
      },
      {
        key: "3",
        sent: 3.2,
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        received: 0.5,
      },
      {
        key: "fdg1",
        sent: 4.1,
        address: "0x26C80CC193B27d73D2C40943Acec77F4DA2c5bd8",
        received: 0.5,
      },
    ],
  },
];

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.key}
        data={pastTransactions.reverse()}
        renderItem={({ item }) => (
          <PastItem
            data={{
              amount: item.totalAmount,
              amountOfAddresses: item.transactions.length,
              transactions: item.transactions,
              datestamp: item.datestamp,
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
