import React from "react";
import { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import List from "../placeholder/List";
import SearchBar from "../searchbars/SearchBar";

function CitySearchScreen({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        `http://api.geonames.org/searchJSON?name_startsWith=${searchInput}&maxRows=6&cities=cities15000&orderby=relevance&username=weknowit`
      );
      const apiData = await apiResponse.json();
      setData(apiData.geonames);
    };
    getData();
    console.log(searchInput);
    console.log(data);
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
          nextScreen="Display"
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "100%",
    marginTop: 50,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CitySearchScreen;
