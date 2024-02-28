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
  warningContainer: {
    alignItems: "center",
    display: "flex",
    width: "100%",
    marginTop: 30,
  },
  warningText: { color: Colors.secondary500 },
  backButton: {
    position: "absolute",
    left: 0,
  },
  backButtonText: {
    color: Colors.primary50,
  },
  phraseContaioner: {
    display: "flex",
    flexDirection: "row",
    rowGap: 5,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    alignItems: "center",
  },
});

export const modal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 20,
    backgroundColor: Colors.primary300,
  },
  textStyle: {
    textAlign: "center",
    color: Colors.primary500,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
