import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const SwitchNetWork = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [network, setNetwork] = useState("polygon");

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={openModal}>
        <Text>{network ? network : "Choose Network"}</Text>
      </TouchableOpacity>
      <Modal
        collapsable
        animationType="slide"
        visible={modalVisible}
        presentationStyle="formSheet"
      >
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Choose a Network</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setNetwork("polygon");
              closeModal();
            }}
          >
            <Text>Polygon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setNetwork("eth");
              closeModal();
            }}
          >
            <Text>Ethereum</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setNetwork("avalance");
              closeModal();
            }}
          >
            <Text>Avalanche</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setNetwork("binance");
              closeModal();
            }}
          >
            <Text>Binance</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default SwitchNetWork;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  container: {
    alignItems: "center",
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 20,
    alignSelf: "flex-end",
    margin: 20,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 100,
  },
});
