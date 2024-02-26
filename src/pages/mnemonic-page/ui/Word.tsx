import { View, StyleSheet } from "react-native";
import { Text } from "shared";
import { Colors } from "shared";

export const Word = ({ word, index }: { word: string; index: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${index}. ${word}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "49%",
    // margin: 5,
    height: 40,
    justifyContent: "center",
    backgroundColor: Colors.primary500,
    padding: 5,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
  },
  text: { color: Colors.primary50 },
});
