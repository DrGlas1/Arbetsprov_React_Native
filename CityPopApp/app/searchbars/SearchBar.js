import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Button,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import colors from "../config/colors";

function SearchBar({ clicked, searchInput, setSearchInput, setClicked }) {
  return (
    <View style={styles.container}>
      <View
        style={clicked ? styles.searchBarClicked : styles.searchBarNotClicked}
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchInput}
          onChangeText={setSearchInput}
          onFocus={() => setClicked(true)}
        />
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color={colors.primary}
            style={{ padding: 1 }}
            onPress={() => {
              setSearchInput("");
            }}
          />
        )}
      </View>
      <View>
        <Button
          title="Cancel"
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
            setSearchInput("");
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBarNotClicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBarClicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    justifyContent: "center",
  },
});

export default SearchBar;