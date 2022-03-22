import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import colors from "../config/colors";
import SearchButton from "../buttons/SearchButton";

function List({ searchInput, data, navigation, nextScreen }) {
  const onFlatListEmpty = () => {
    return (
      <View>
        <Text style={styles.err}>No such place</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    if (searchInput === "") {
      return;
    }

    if (item.name.toUpperCase().includes(searchInput.toUpperCase().trim())) {
      return (
        <View style={styles.button}>
          <SearchButton
            text={item.toponymName}
            onPress={() => navigation.navigate(nextScreen, { data: item })}
          />
        </View>
      );
    }
  };

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
  err: {
    fontSize: 20,
  },
});

export default List;
