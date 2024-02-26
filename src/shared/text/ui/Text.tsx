import { Text as NativeText, StyleSheet } from "react-native";
import { useFonts, Rubik_500Medium } from "@expo-google-fonts/rubik";
export const Text = ({
  children,
  style,
}: {
  children: string;
  style?: any;
}) => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium,
  });
  if (!fontsLoaded) return null;
  return <NativeText style={[styles.text, style]}>{children}</NativeText>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Rubik_500Medium",
  },
});
