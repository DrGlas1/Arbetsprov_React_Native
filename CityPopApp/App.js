import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/config/colors";
import PopDisplayScreen from "./app/screens/PopDisplayScreen";
import CitiesDisplayScreen from "./app/screens/CitiesDisplayScreen";
import SearchScreen from "./app/screens/SearchScreen";

/**
 * The main app that displays all the different screens.
 * The navigation is done with NavigationContainer
 * @returns NavigationContainer containing all the different screens
 */
export default function App() {
  const Stack = createNativeStackNavigator();
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
          component={SearchScreen}
          initialParams={{
            nextScreen: "Display",
            additionalSearchCriteria: "&cities=cities15000",
          }}
          options={{
            headerTransparent: true,
            headerTintColor: colors.primary,
            headerTitle: "City Search",
          }}
        />
        <Stack.Screen
          name="CountrySearch"
          component={SearchScreen}
          initialParams={{
            nextScreen: "Cities",
            additionalSearchCriteria: "&featureCode=PCLI",
          }}
          options={{
            headerTransparent: true,
            headerTintColor: colors.primary,
            headerTitle: "Country Search",
          }}
        />
        <Stack.Screen
          name="Display"
          component={PopDisplayScreen}
          options={{
            headerTransparent: true,
            headerTintColor: colors.primary,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Cities"
          component={CitiesDisplayScreen}
          options={{
            headerTransparent: true,
            headerTintColor: colors.primary,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
