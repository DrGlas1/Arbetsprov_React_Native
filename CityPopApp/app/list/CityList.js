import React from "react";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import SearchButton from "../buttons/SearchButton";

/**
 * A component that shows the cities list of the 5 biggest cities
 * in a country. The cities are displayed as SearchButtons that
 * @param navigation Used to navigate to the different screens
 * @param data Contains the name of the country of the cities this
 * component displays
 * @returns A list of the 5 biggest cities in a country with buttons
 * that shows the cities population
 */
function CityList({ navigation, data }) {
  const apiUrl = `http://api.geonames.org/searchJSON?q=${data.name}&maxRows=5&country=${data.countryCode}&cities=cities5000&orderby=population&username=weknowit`;
  const [cities, setCities] = useState({});

  /**
   * Gets the 5 largest cities with a population over 5000
   * based on the country that was selected.
   * Gets the data from the same API as the country
   */
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(apiUrl);
      const apiData = await apiResponse.json();
      setCities(apiData);
    };
    getData();
  }, [data]);

  /**
   * Destructures the cities from data and get iterated over.
   * Displays the cities with SearchButtons that can be pressed to go
   * to PopDisplayScreen to show that cities population.
   * @param {Object} item The city and its information
   * @returns A SearchButton displaying the cities name. It can be pressed
   * to navigate to the PopDisplayScreen that displays the cities population.
   * @function
   */
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

  return (
    <SafeAreaView style={styles.button}>
      <FlatList
        data={cities.geonames}
        renderItem={renderItem}
        keyExtractor={(item) => item.geonameId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 220,
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CityList;
