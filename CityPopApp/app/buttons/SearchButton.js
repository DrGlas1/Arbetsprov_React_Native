import React from "react";
import { TouchableOpacity } from "react-native";
import DisplayButton from "./DisplayButton";

function SearchButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <DisplayButton text={text} />
    </TouchableOpacity>
  );
}

export default SearchButton;
