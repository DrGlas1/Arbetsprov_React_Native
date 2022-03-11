import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Logo({ text }) {
    return (
        <Text style={styles.logo}>
            { text }
        </Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        color: colors.primary,
        fontSize: 50,
    },
})

export default Logo;