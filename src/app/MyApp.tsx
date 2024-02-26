import { MnemonicPage, GreetingPage, ConfirmMnemonicPage } from "pages";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function MyApp() {
  return (
    <NavigationContainer>
      {/* <Tab. */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Greeting" component={GreetingPage} />
        <Stack.Screen name="Mnemonic" component={MnemonicPage} />
        <Stack.Screen name="ConfirmMnemonic" component={ConfirmMnemonicPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
