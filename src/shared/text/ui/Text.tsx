import {
  Text as NativeText,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";
export const Text = ({
  children,
  style,
}: {
  children: string;
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <NativeText selectable style={[styles.text, style]}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: "Rubik_500Medium",
  },
});
