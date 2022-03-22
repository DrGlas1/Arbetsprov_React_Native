import React from "react";
import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import List from "../placeholder/List";
import SearchBar from "../searchbars/SearchBar";

function SearchScreen({ navigation, route }) {
  const [searchInput, setSearchInput] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        `http://api.geonames.org/searchJSON?name_startsWith=${searchInput}&maxRows=13${route.params.additionalSearchCriteria}&orderby=relevance&username=weknowit`
      );
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
          nextScreen={route.params.nextScreen}
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
