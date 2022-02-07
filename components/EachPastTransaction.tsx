import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Transaction = {
  address: string;
  sent?: number;
  received?: number;
};
const EachPastTransaction = (props: Transaction) => {
  const { address, sent, received } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.addressText}>
        {`${address.substring(0, 5)}...${address.substring(
          address.length - 10
        )}`}
      </Text>
      <Text style={styles.sentText}>{sent}</Text>
      <Text style={styles.sentText}>{received}</Text>
    </View>
  );
};

export default EachPastTransaction;

const styles = StyleSheet.create({
  addressText: {
    fontSize: 20,
    color: "#595959",
  },
  sentText: {
    fontSize: 20,
    color: "#595959",
    fontWeight: "bold",
  },
  container: {
    width: 300,
    height: 50,
    flexDirection: "row",

    justifyContent: "space-between",
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
  },
});
