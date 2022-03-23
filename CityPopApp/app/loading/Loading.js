import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import colors from "../config/colors";

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
