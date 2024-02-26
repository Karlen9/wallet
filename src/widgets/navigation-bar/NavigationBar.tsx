import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const NavigationBar = () => {
  //   const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <TouchableOpacity>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {
    width: "100%",
    // alignItems: "flex-end",
    flex: 1,
    flexDirection: "row",
    height: "10%",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    // paddingHorizontal: 30,
  },
});
