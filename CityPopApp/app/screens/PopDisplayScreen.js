import React from "react";
import { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Logo from "../logo/Logo";
import SearchButton from "../buttons/SearchButton";
import Styles from "../config/styles";
import DisplayButton from "../buttons/DisplayButton";
import Loading from "../loading/Loading";

/**
 * Displays the name of the city given from the SearchScreen.
 * Also provides a button to return to the homescreen.
 * @param navigation Used to navigate to the different screens
 * @param {Object} route.params.data The city and its information
 * @returns A screen displaying a city name, the population of
 * the city and a button to go back to the homescreen
 */
function PopDisplayScreen({ navigation, route }) {
  const { data } = route.params;
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/CitySearchScreen.jpg")}
      onLoad={imageLoaded}
    >
      <Loading loading={loading} />
      <View style={Styles.logo}>
        <Logo text={data.toponymName} />
      </View>

      <View style={styles.button}>
        <DisplayButton
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

export default PopDisplayScreen;
