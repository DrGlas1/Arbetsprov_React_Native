import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function CitySearchScreen({ navigation }) {
    return (
        <ImageBackground
         style={styles.background}
         source={require('../assets/CitySearchScreen.jpg')}
        >

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CitySearchScreen;