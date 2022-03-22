import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Logo from "../logo/Logo";
import SearchButton from "../buttons/SearchButton";

function DisplayScreen({ navigation, route }) {
  const { data } = route.params;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/CitySearchScreen.jpg")}
    >
      <View style={styles.logo}>
        <Logo text={data.toponymName} />
      </View>

      <View style={styles.button}>
        <SearchButton text={`Population: ${data.population}`} />
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
  logo: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 0.105,
    top: "10%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default DisplayScreen;
