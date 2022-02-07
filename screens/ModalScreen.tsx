import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet } from "react-native";
import EachPastTransaction from "../components/EachPastTransaction";

import EditScreenInfo from "../components/EditScreenInfo";
import Label from "../components/Label";
import { Text, View } from "../components/Themed";
import TotalPot from "../components/TotalPot";
import Navigation from "../navigation";

export default function ModalScreen({ navigation, route }: any) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 10 }}>
        <TotalPot
          amount={data.amount}
          amountAddresses={data.transactions.length}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Label text="address" />

        <View style={{ marginLeft: "auto", flexDirection: "row" }}>
          <Label text="Sent" />
          <Label text="Received" />
        </View>
      </View>
      <FlatList
        data={data.transactions}
        renderItem={({ item, index }) => (
          <EachPastTransaction
            key={index}
            address={item.address}
            received={item.received}
            sent={item.sent}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    width: 300,
  },
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
