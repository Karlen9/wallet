import { ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
} from "react-native";
import { Text } from "shared/text/ui/Text";
import { Colors } from "shared/styles";

export type TButtonTheme = "primary" | "secondary" | "cancel";

type TButtonProps = {
  title?: string;
  onPress?: () => void;
  theme?: TButtonTheme;
  children?: ReactNode;
  leftIcon?: boolean;
  style?: StyleProp<ViewStyle>;
  disable?: boolean;
};

export const Button = ({
  title,
  onPress,
  theme = "primary",
  children,
  leftIcon,
  style,
  disable,
}: TButtonProps) => {
  return (
    <Pressable
      style={[styles.common, styles[theme], disable && styles.disable, style]}
      onPress={onPress}
      disabled={disable}
    >
      {leftIcon && children ? <View>{children}</View> : null}
      <Text
        style={[
          theme === "primary"
            ? styles.buttonText
            : theme === "secondary"
            ? styles.secondaryText
            : styles.buttonText,
          styles.commonText,
        ]}
      >
        {title}
      </Text>
      {!leftIcon && children ? <View>{children}</View> : null}
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
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryText: {
    color: Colors.primary100,
    alignItems: "center",
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary300,
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    alignItems: "center",
  },
  common: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  commonText: {
    fontSize: 18,
  },
  disable: {
    backgroundColor: Colors.primary100,
  },
});
