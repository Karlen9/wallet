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
  textInput: {
    backgroundColor: Colors.primary500,
    borderColor: Colors.primary300,
    height: 200,
    color: Colors.primary50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  invalidTextInput: {
    backgroundColor: Colors.primary500,
    borderColor: Colors.secondary500,
    height: 200,
    color: Colors.primary50,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  invalidTextContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  invalidText: {
    color: Colors.secondary500,
  },
  importButton: {
    marginBottom: 5,
  },
});
