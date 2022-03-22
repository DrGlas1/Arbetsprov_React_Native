import React from "react";
import { StyleSheet } from "react-native";

function CountryCities(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/CountrySearchScreen.jpg")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CountryCities;
