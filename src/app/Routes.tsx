import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import {
  ConfirmMnemonicPage,
  GreetingPage,
  ImportWalletPage,
  MainPage,
  MnemonicPage,
  SwapPage,
} from "pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "shared";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const tabBarOptions = (
  icon: (props: {
    focused?: boolean;
    color?: string;
    size?: number;
  }) => React.ReactNode
) => {
  return {
    tabBarIcon: icon,
    tabBarBackground: () => (
      <View
        style={{
          backgroundColor: Colors.primary1000,
          width: "100%",
          height: "100%",
        }}
      />
    ),
    tabBarLabel: "",
    tabBarInactiveTintColor: Colors.primary100,
    tabBarActiveTintColor: Colors.primary50,
    tabBarStyle: { borderTopWidth: 0 },
  };
};

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Main"
        component={MainPage}
        options={() =>
          tabBarOptions(({ color, size }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          ))
        }
      />
      <Tab.Screen
        name="Swap"
        component={SwapPage}
        options={() =>
          tabBarOptions(({ color, size }) => (
            <Ionicons name="sync" color={color} size={size} />
          ))
        }
      />
    </Tab.Navigator>
  );
};

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Greeting" component={GreetingPage} />
        <Stack.Screen name="Mnemonic" component={MnemonicPage} />
        <Stack.Screen name="ConfirmMnemonic" component={ConfirmMnemonicPage} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ImportWallet" component={ImportWalletPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
