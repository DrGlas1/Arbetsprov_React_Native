import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CitySearchScreen from './app/screens/CitySearchScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import colors from './app/config/colors';

export default function App() {
  return (
    <NavigationContainer>    
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="CitySearch"
          component={CitySearchScreen}
          options={{
            headerTransparent: true,
            headerTintColor: colors.primary,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();
