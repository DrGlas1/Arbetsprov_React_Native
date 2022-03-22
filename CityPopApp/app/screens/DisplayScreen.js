import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Logo from "../logo/Logo";
import SearchButton from "../buttons/SearchButton";
import Styles from "../config/styles";

function DisplayScreen({ navigation, route }) {
  const { data } = route.params;

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/CitySearchScreen.jpg")}
    >
      <View style={Styles.logo}>
        <Logo text={data.toponymName} />
      </View>

      <View style={styles.button}>
        <SearchButton
          text={`Population: \n ${data.population.toLocaleString("fi-FI")}`}
        />
        <SearchButton
          text="Return home"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 0.12,
    top: "9%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default DisplayScreen;
