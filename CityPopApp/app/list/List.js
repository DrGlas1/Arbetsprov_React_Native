import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import colors from "../config/colors";
import SearchButton from "../buttons/SearchButton";

/**
 * Displays the data gathered from the API and shows the place names in
 * SearchButtons that when clicked takes the user to a different screen.
 * @param {Object} searchInput The user input from the saerchbar
 * @param {Object} data Object containing places got from API
 * @param {String} navigation Used to navigate to the different screens
 * @param {String} nextScreen Name of the next screen to be navigated to.
 * @returns A List of elements to display on screen that are SearchButtons
 */
function List({ searchInput, data, navigation, nextScreen }) {
  const renderItem = ({ item }) => {
    if (searchInput === "") {
      return;
    }

    return (
      <View style={styles.button}>
        <SearchButton
          text={item.toponymName}
          onPress={() => navigation.navigate(nextScreen, { data: item })}
        />
      </View>
    );
  };

  /**
   * Is called if no relevant data is passed to the FlatList, i.e.
   * if isDataEmpty returns an empty array
   * @returns An error message showing that there is no such place in
   * the database with the saerched for name
   * @function
   */
  const onFlatListEmpty = () => {
    return (
      <View style={styles.errBorder}>
        <Text style={styles.errText}>No such place</Text>
      </View>
    );
  };

  /**
   * Determines if the data being sent into the FlatList should be
   * displayed or if an error message should appear on the screen.
   * This happens when the input isn't undefined but doesn't have any
   * information, i.e. the datas length is 0.
   * @param {Object} dataObject The data being sent into the FlatList
   * @returns An empty array if no information is sent in, otherwise
   * just returns the input.
   */
  const isDataEmpty = (dataObject) => {
    return dataObject != undefined && dataObject.length === 0 ? [] : dataObject;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={isDataEmpty(data)}
          renderItem={renderItem}
          keyExtractor={(item) => item.geonameId}
          ListEmptyComponent={onFlatListEmpty}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
    color: colors.primary,
    marginRight: "50%",
  },
  button: {
    margin: 4,
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  errBorder: {
    marginLeft: "5%",
    borderRadius: 8,
    width: 200,
    paddingVertical: 10,
    backgroundColor: "#b70b0d",
  },
  errText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default List;
