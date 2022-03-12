import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function CountrySearchScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/CountrySearchScreen.jpg')}
        >

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CountrySearchScreen;