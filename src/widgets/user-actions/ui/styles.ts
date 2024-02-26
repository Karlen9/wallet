import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 18,
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    columnGap: 5,
    alignItems: "center",
    flexDirection: "row",
  },
});
