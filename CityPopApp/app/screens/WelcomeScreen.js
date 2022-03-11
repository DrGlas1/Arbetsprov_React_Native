import React from 'react';
import { ImageBackground, StyleSheet, View, Button } from 'react-native';
import SearchButton from '../buttons/SearchButton';
import Logo from '../logo/Logo';

function WelcomeScreen(props) {
    return (
        
        <ImageBackground
            style={styles.background}
            source={require('../assets/WelcomeScreen.jpg')}
        >
            <View style={styles.logo}>
                <Logo text={'CityPop'}/>
            </View>
            <View
                style={styles.button}
            >
                <SearchButton 
                    text = 'search by city'
                    onPress = {() => console.log('Search!')} 
                />
                <SearchButton
                    text = 'search by country'
                    onPress = {() => console.log('Search!')} 
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    logo: {
        position: 'absolute',
        top: '22%',
    }
    
})

export default WelcomeScreen;