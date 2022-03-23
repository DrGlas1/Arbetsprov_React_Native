import React from "react";
import { TouchableOpacity } from "react-native";
import DisplayButton from "./DisplayButton";

/**
 * An extension of DisplayButton, this button has an action when it is pressed,
 * the TouchableOpacity gives user feedback when the button is pressed.
 * @param {String} text
 * @param {Function} onPress Function that gives the behaviour when the button is pressed.
 * @returns A button that can display text and be pressed
 */
function SearchButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <DisplayButton text={text} />
    </TouchableOpacity>
  );
}

export default SearchButton;
