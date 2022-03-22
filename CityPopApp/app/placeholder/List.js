import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../config/colors";
import SearchButton from "../buttons/SearchButton";

function List({ searchInput, setClicked, data, navigation }) {
  const renderItem = ({ item }) => {
    if (searchInput === "") {
      return;
    }

    if (item.name.toUpperCase().includes(searchInput.toUpperCase().trim())) {
      return (
        <View style={styles.button}>
          <SearchButton
            text={item.toponymName}
            onPress={() => navigation.navigate("Display", (item = { item }))}
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View onStartShouldSetResponder={() => setClicked(false)}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.geonameId}
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
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
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
});

export default List;
