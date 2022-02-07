import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Transaction = {
  key: string;
  sent?: number;
  received?: number;
};
type IPastItem = {
  data?: {
    amount?: number;
    amountOfAddresses?: number;
    transactions?: Transaction[];
    datestamp?: string;
  };
};
const PastItem = (props: IPastItem) => {
  const { data } = props;
  const navigation = useNavigation();
  const handleShowPastData = () => {
    navigation.navigate("Modal", { data: data });
    // console.log("yerr");
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleShowPastData}>
      <Text style={styles.text}>
        Total <Text style={{ fontWeight: "bold" }}>{data?.amount}</Text>
      </Text>
      <Text style={styles.text}>
        Contestants{" "}
        <Text style={{ fontWeight: "bold" }}>{data?.amountOfAddresses}</Text>
      </Text>
      <Text style={{ marginTop: 10 }}>{data?.datestamp}</Text>
    </TouchableOpacity>
  );
};

export default PastItem;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 100,

    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 20,
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});
