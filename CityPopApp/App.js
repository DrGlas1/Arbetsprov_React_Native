import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/config/colors";
import DisplayScreen from "./app/screens/DisplayScreen";
import CountryCities from "./app/screens/CountryCities";
import SearchScreen from "./app/screens/SearchScreen";

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
          component={SearchScreen}
          initialParams={{
            imagePath: "../assets/CitySearchScreen.jpg",
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
            imagePath: "../assets/CitySearchScreen.jpg",
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
          component={DisplayScreen}
          options={{
            headerTransparent: true,
            headerTintColor: colors.primary,
            headerTitle: "City Search",
          }}
        />
        <Stack.Screen
          name="Cities"
          component={CountryCities}
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

const Stack = createNativeStackNavigator();
