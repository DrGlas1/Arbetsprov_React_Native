import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Logo from "../logo/Logo";
import SearchButton from "../buttons/SearchButton";

function DisplayScreen({ navigation, route }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/CitySearchScreen.jpg")}
    >
      <View style={styles.logo}>
        <Logo text={"CityPop"} />
      </View>

      <View style={styles.button}>
        <SearchButton
          text={`Population: ${route.params.item.population}`}
          onPress={() => navigation.navigate("CitySearch")}
        />
        <SearchButton
          text="search by country"
          onPress={() => navigation.navigate("CountrySearch")}
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
