import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import colors from "../config/colors";

/**
 * A button that can't be pressed, only used to display text in a
 * nice, visible way
 * @param {String} text The text that is displayed on the button
 * @returns A textbox
 */
function ViewButton({ text }) {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: 200,
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ViewButton;
