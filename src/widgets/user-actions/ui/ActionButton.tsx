import { View, StyleSheet, Pressable } from "react-native";
import { Button, Colors, Text } from "shared";

type Position = "left" | "right" | "center";

type TActionButtonProps = {
  position: Position;
  title?: string;
  icon?: React.ReactNode;
  onPress: () => void;
};

export const ActionButton = (props: TActionButtonProps) => {
  const { position, title, icon, onPress } = props;

  return (
    <Pressable
      style={[actionButton[position], actionButton.container]}
      onPress={onPress}
    >
      {icon && icon}
      <Text style={actionButton.textStyle}>{title.toUpperCase()}</Text>
    </Pressable>
  );
};

export const actionButton = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary1000,
    padding: 20,
    width: "33%",
    alignItems: "center",
    display: "flex",
    flexGrow: 1,
  },
  center: {
    borderRadius: 8,
  },
  right: {
    borderRadius: 8,
    borderBottomRightRadius: 26,
  },
  left: {
    borderRadius: 8,
    borderBottomLeftRadius: 26,
  },
  textStyle: {
    color: Colors.primary50,
    fontSize: 12,
    marginTop: 9,
  },
});
