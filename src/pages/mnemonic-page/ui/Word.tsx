import { View, StyleSheet } from "react-native";
import { Text, Colors } from "shared";

export const Word = ({
  word,
  index,
  blur,
}: {
  word: string;
  index: number;
  blur?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{index.toString() + ". "}</Text>
      <View style={blur && styles.blur}>
        <Text style={styles.text}>{word}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "49%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.primary500,
    padding: 5,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
  },
  text: { color: Colors.primary50 },
  blur: { backgroundColor: Colors.primary50, borderRadius: 3 },
});
