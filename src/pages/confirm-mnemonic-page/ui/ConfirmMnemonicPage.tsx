import { View, Text } from "react-native";
import { Button, PageWrapper } from "shared";
import { styles } from "./styles";

export const ConfirmMnemonicPage = ({ navigation }) => {
  return (
    <PageWrapper>
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <View style={{ position: "absolute", left: 0 }}>
            <Button
              title="Back"
              onPress={() => navigation.navigate("Greeting")}
              theme="secondary"
              leftIcon
            ></Button>
          </View>

          <View style={styles.header}>
            <Text style={styles.headerText}>Secret phrase confirmation</Text>
          </View>
        </View>

        {/* <View style={styles.phraseContainer}>
          {mnemonicArray.map((word, index) => (
            <Word key={uuid.v4().toString()} index={index + 1} word={word} />
          ))}
        </View> */}
      </View>
    </PageWrapper>
  );
};
