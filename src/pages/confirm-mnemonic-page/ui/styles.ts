import { StyleSheet } from "react-native";
import { Colors } from "shared";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginTop: 2,
    color: Colors.primary50,
  },
  headerText: {
    color: Colors.primary50,
  },
});
