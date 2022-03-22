import React from "react";
import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import List from "../list/List";
import SearchBar from "../searchbars/SearchBar";

/**
 * Screen used to search for information via external API, uses SearchBar
 * and ListComponent to get and display the information. The places displayed are sorted by population.
 * @param navigation Used to navigate to the different screens
 * @param {String} route.params.nextScreen Gives the next screen when clicking on the buttons
 * @param {String} route.params.additionalSearchCriteria Adds aditional criterias for getting information from API.
 * This can determine whether cities or countries show up in the search.
 * @returns A screen that can search and display cities or countries depending on the passed in parameters
 */
function SearchScreen({ navigation, route }) {
  const [searchInput, setSearchInput] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();
  const { nextScreen, additionalSearchCriteria } = route.params;
  const apiUrl = `http://api.geonames.org/searchJSON?name_startsWith=${searchInput}&maxRows=13${additionalSearchCriteria}&orderby=popultaion&username=weknowit`;

  /**
   * Updates data to display on list when input into searchfield changes.
   * Gets the data from external API.
   */
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(apiUrl);
      const apiData = await apiResponse.json();
      setData(apiData.geonames);
    };
    getData();
  }, [searchInput]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/CitySearchScreen.jpg")}
    >
      <SafeAreaView>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          clicked={clicked}
          setClicked={setClicked}
        />

        <List
          searchInput={searchInput}
          data={data}
          setClicked={setClicked}
          navigation={navigation}
          nextScreen={nextScreen}
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
});

export default SearchScreen;