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

const Item = ({ name }) => (
  <TouchableOpacity onPress={() => console.log(name)}>
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
    </View>
  </TouchableOpacity>
);

function List({ searchInput, setClicked, data }) {
  const renderItem = ({ item }) => {
    if (searchInput === "") {
      return;
    }

    if (item.name.toUpperCase().includes(searchInput.toUpperCase().trim())) {
      return <Item name={item.name} />;
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
});

export default List;
