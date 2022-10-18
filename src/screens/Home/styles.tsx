import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topFrame: {
    backgroundColor: "black",
    width: 400,
    height: 173,
    flexDirection: "row",
  },
  centerFrame: {
    backgroundColor: "#0D0D0D",
    flexDirection: "row",
    flex: 5,
  },
  bottomFrame: {
    backgroundColor: "white",
    width: 400,
    height: 560,
    // flexDirection: "row",
    // flex: 5,
  },

  input: {
    width: 271,
    height: 54,
    margin: 12,
    borderWidth: 2,
    borderColor: "#5E60CE",
    borderRadius: 5,
    padding: 10,
    color: "#F2F2F2",
    flexDirection: "row",
    marginTop: 100,
    marginLeft: 27,
  },
  buttonAdd: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    marginTop: 100,
  },
  textButtonAdd: {
    color: "#F2F2F2",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  createdItem: {
    color: "#4EA8DE",
    fontWeight: "bold",
    flex: 1,
    marginLeft: 27,
    marginTop: 15,
  },
  finishedItem: {
    color: "#5E60CE",
    fontWeight: "bold",
    marginRight: 50,
    marginTop: 15,
  },
  listEmpty: {
    fontSize: 14,
    marginLeft: 14,
    marginTop: 150,
    marginRight: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  listEmpty2: {
    fontSize: 14,
    marginLeft: 14,
    marginRight: 14,
    textAlign: "center",
  },
});
