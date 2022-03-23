import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "../config/colors";

/**
 * Shows a loading symbol when something hasn't loaded yet, like an image.
 * @param {Boolean} loading Shows the loading symbol only when loading is true
 * @returns An ActivityIndicator with an absolut position on the screeb
 */
function Loading({ loading }) {
  return (
    <View style={styles.loading}>
      <ActivityIndicator
        size="large"
        color={colors.loading}
        animating={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
