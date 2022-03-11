import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import colors from '../config/colors';

function SearchButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        width: 200,
        paddingVertical: 10,
        backgroundColor: colors.primary,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
})

export default SearchButton;