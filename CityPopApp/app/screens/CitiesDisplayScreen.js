import React from "react";
import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import Logo from "../logo/Logo";
import Styles from "../config/styles";
import CityList from "../list/CityList";
import colors from "../config/colors";

/**
 * A screen that displays a country along with the 5 cities that have the
 * largest population in said country, in order of population. Uses a
 * Logo component along with a CityList to display the country and the cities respectively.
 * @param navigation Used to navigate to the different screens
 * @param {Object} route.params.data The country and its information
 * @returns A screen displaying a country along with its 5 most populated cities
 */
function CitiesDisplayScreen({ navigation, route }) {
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
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color={colors.primary}
          animating={loading}
        />
      </View>
      <View style={Styles.logo}>
        <Logo text={data.toponymName} />
      </View>
      <CityList navigation={navigation} data={data} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    position: "absolute",
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CitiesDisplayScreen;
