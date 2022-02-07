import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";

interface IBaller {
  address: string;
  sent?: number;
}
const EachBaller = (props: IBaller) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { address, sent } = props;
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Text>
          {`${address.substring(0, 5)}...${address.substring(
            address.length - 10
          )}`}
        </Text>
        <Text>{sent}</Text>
      </TouchableOpacity>
      <Modal presentationStyle="formSheet" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.nftContainer}>
            <Text style={styles.address}>{address} </Text>
            <LottieView
              autoPlay
              source={require("../assets/rich.json")}
            ></LottieView>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default EachBaller;

const styles = StyleSheet.create({
  address: {
    textAlign: "center",
  },
  container: {
    width: 300,
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#cccccc",
    marginVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nftContainer: {
    padding: 20,
    height: 400,
    width: 350,
    borderRadius: 20,
    backgroundColor: "pink",
  },
});
