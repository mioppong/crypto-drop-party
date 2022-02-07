import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface ILabel {
  text: string;
  onPress?: () => void;
}
const Label = (props: ILabel) => {
  const { text } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
});
