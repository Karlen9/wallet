import { StyleSheet } from "react-native";
import { Colors } from "shared";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "black",
    margin: 0,
    width: "100%",
  },
  form: {
    width: "100%",
  },
  createButton: {
    marginBottom: 50,
    width: "100%",
    color: Colors.primary1000,
    backgroundColor: Colors.primary300,
    padding: 15,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonText: {
    fontSize: 18,
  },
  header: {
    color: "#6EDA2A",
    fontSize: 50,
    width: "100%",
  },
  mainContainer: {
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export default styles;
