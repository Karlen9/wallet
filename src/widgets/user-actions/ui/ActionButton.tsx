import { View, StyleSheet } from "react-native";
import { Text } from "shared";
import { Colors } from "shared";

type Position = "left" | "right" | "center";

type TActionButtonProps = {
  position: Position;
  title?: string;
  icon?: React.ReactNode;
};

export const ActionButton = (props: TActionButtonProps) => {
  const { position, title, icon } = props;

  return (
    <View style={[actionButton[position], actionButton.container]}>
      {icon && icon}
      <Text style={actionButton.textStyle}>{title.toUpperCase()}</Text>
    </View>
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
