import { View } from "react-native";
import { Colors } from "shared/styles/Colors";
import Constants from "expo-constants";
import { ReactNode } from "react";

const statusBarHeight = Constants.statusBarHeight;

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: statusBarHeight + 25,
        backgroundColor: Colors.primary1000,
        height: "100%",
      }}
    >
      {children}
    </View>
  );
};
