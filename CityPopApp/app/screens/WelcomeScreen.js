import React from 'react';
import { ImageBackground, StyleSheet, View, Button } from 'react-native';

function WelcomeScreen(props) {
    return (
        
        <ImageBackground
            style={styles.background}
            source={require('../assets/WelcomeScreen.jpg')}
        >
            <View
                style={styles.button}
            >
                {CityButton}
                {CountryButton}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const CityButton = <Button
    title='SEARCH BY CITY'
    color='#841584'
    onPress={() => console.log('CityButton pressed')}
/>

const CountryButton = <Button
    title='SEARCH BY COUNTRY'
    color='#841584'
    onPress={() => console.log('CountryButton pressed')}
/>

export default WelcomeScreen;