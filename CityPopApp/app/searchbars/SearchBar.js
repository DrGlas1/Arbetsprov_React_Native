import React from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import colors from "../config/colors";

/**
 * A SearchBar that takes and displays user input from a saerchfield. Has
 * a little cross to the side of the searchfield, Entypo, that resets the user
 * input when clicked, along with a cancel button that takes the user out of the
 * input phase when clicked.
 * @param {Boolean} clicked Determines if the searchfield is clicked or not
 * @param {String} searchInput User input that is typed into the searchfield
 * @param {Function} setClicked Function that changes the value of clicked
 * @param {Function} setSearchInput Function that changes the value of searchInput
 * @returns A searchfield with a searchicon, a button to reset user input and
 * a button to take the user out of the input phase
 */
function SearchBar({ clicked, searchInput, setClicked, setSearchInput }) {
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
          color={colors.primary}
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
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    justifyContent: "center",
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
  searchBarNotClicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
});

export default SearchBar;
