import { View } from "react-native";
import { Colors } from "shared/styles/Colors";
import Constants from "expo-constants";
import { ReactNode } from "react";

const statusBarHeight = Constants.statusBarHeight;

export const PageWrapper = ({
  children,
  noPadding,
}: {
  children: ReactNode;
  noPadding?: boolean;
}) => {
  return (
    <View
      style={{
        padding: noPadding ? 0 : 20,
        paddingTop: noPadding ? 0 : statusBarHeight + 25,
        backgroundColor: Colors.primary1000,
        height: "100%",
      }}
    >
      {children}
    </View>
  );
};
