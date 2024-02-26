import { StyleSheet } from "react-native";
import { Colors } from "shared";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
    display: "flex",
    flexDirection: "column",
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
  backButton: {
    position: "absolute",
    left: 0,
  },
  backButtonText: {
    color: Colors.primary50,
  },
});
