import { ReactNode } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "shared/styles";

export type TButtonTheme = "primary" | "secondary";

type TButtonProps = {
  title?: string;
  onPress?: () => void;
  theme: TButtonTheme;
  children?: ReactNode;
  leftIcon?: boolean;
};

export const Button = ({
  title,
  onPress,
  theme,
  children,
  leftIcon,
}: TButtonProps) => {
  return (
    <Pressable
      style={theme === "primary" ? styles.primary : null}
      onPress={onPress}
    >
      <Text
        style={theme === "primary" ? styles.buttonText : styles.secondaryText}
      >
        {leftIcon && children} {title} {!leftIcon && children}
      </Text>
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
