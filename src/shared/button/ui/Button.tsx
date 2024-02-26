import { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Text } from "shared/text/ui/Text";
import { Colors } from "shared/styles";

export type TButtonTheme = "primary" | "secondary";

type TButtonProps = {
  title?: string;
  onPress?: () => void;
  theme: TButtonTheme;
  children?: ReactNode;
  leftIcon?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({
  title,
  onPress,
  theme,
  children,
  leftIcon,
  style,
}: TButtonProps) => {
  return (
    <Pressable
      style={[theme === "primary" ? styles.primary : null, style]}
      onPress={onPress}
    >
      {leftIcon && children ? children : null}
      <Text
        style={theme === "primary" ? styles.buttonText : styles.secondaryText}
      >
        {title}
      </Text>
      {!leftIcon && children ? children : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primary: {
    width: "100%",
    color: Colors.primary1000,
    backgroundColor: Colors.primary300,
    padding: 15,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    fontSize: 18,
    justifyContent: "center",
  },
  secondaryText: {
    color: Colors.primary100,
    fontSize: 18,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    alignItems: "center",

    fontSize: 18,
  },
});
