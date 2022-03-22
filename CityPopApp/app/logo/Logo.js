import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from "../config/colors";

/**
 * The logo of some of the screens. Shows the text in a border box
 * to highlight the text.
 * @param {String} text The text that should be displayed on the logo.
 * @returns A textbox
 */
function Logo({ text }) {
  return (
    <View style={styles.border}>
      <Text style={styles.logo}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 40,
    textAlign: "center",
  },

  border: {
    borderRadius: 8,
    width: 250,
    paddingVertical: 20,
    backgroundColor: colors.secondary,
  },
});

export default Logo;
