import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";

function CountryCities({ navigation, route }) {
  const { data } = route.params;
  const apiUrl = `http://api.geonames.org/searchJSON?q=${data.name}&maxRows=1&country=${data.countryCode}&cities=cities15000&orderby=relevance&username=weknowit`;
  const [cities, setCities] = useState("");

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(apiUrl);
      apiData = await apiResponse.json();
      setCities(apiData);
    };
    getData();
  });

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
