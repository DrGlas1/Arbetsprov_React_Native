import React from "react";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  FlatList,
  View,
} from "react-native";
import SearchButton from "../buttons/SearchButton";
import Logo from "../logo/Logo";
import Styles from "../config/styles";

function CountryCities({ navigation, route }) {
  const { data } = route.params;
  const apiUrl = `http://api.geonames.org/searchJSON?q=${data.name}&maxRows=5&country=${data.countryCode}&cities=cities15000&orderby=population&username=weknowit`;
  const [cities, setCities] = useState({});

  const renderItem = ({ item }) => {
    return (
      <View style={styles.button}>
        <SearchButton
          text={item.toponymName}
          onPress={() => navigation.navigate("Display", { data: item })}
        />
      </View>
    );
  };

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(apiUrl);
      const apiData = await apiResponse.json();
      setCities(apiData);
    };
    getData();
  }, [data]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/CitySearchScreen.jpg")}
    >
      <View style={Styles.logo}>
        <Logo text={data.toponymName} />
      </View>
      <SafeAreaView style={styles.button}>
        <FlatList
          data={cities.geonames}
          renderItem={renderItem}
          keyExtractor={(item) => item.geonameId}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    top: 220,
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CountryCities;
