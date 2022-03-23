import React from "react";
import { useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
  Button,
} from "react-native";
import SearchButton from "../buttons/SearchButton";
import Logo from "../logo/Logo";
import Styles from "../config/styles";
import colors from "../config/colors";

/**
 * Initial screen that has two buttons that direct either to the screen
 * to search for cities or the screen to search for countries
 * @param navigation Used to navigate to the different screens
 * @returns A screen with a logo and two buttons for navigation
 */
function WelcomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/WelcomeScreen.jpg")}
      onLoad={imageLoaded}
    >
      <View style={Styles.logo}>
        <Logo text={"CityPop"} />
      </View>
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color={colors.primary}
          animating={loading}
        />
      </View>
      <View style={styles.button}>
        <SearchButton
          text="search by city"
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
  button: {
    flex: 0.1,
    top: "9%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loading: {
    position: "absolute",
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomeScreen;
