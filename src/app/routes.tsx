import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GreetingPage } from "pages";

const Stack = createNativeStackNavigator();

export const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Greeting" component={GreetingPage} />
        <Stack.Screen name="Congrats" component={GreetingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
