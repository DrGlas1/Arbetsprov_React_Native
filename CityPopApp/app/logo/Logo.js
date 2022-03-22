import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from "../config/colors";

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
