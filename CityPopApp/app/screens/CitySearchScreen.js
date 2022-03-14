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
  const [fakeData, setFakeData] = useState();

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

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
          data={fakeData}
          setClicked={setClicked}
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
