import { StatusBar, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, Colors, PageWrapper } from "shared";
import { styles } from "./styles";
import { Text } from "shared";
import { mnemonicToAccount } from "viem/accounts";
import { useAccountStore } from "app/store";
import { useState } from "react";

export const ImportWalletPage = ({ navigation }) => {
  const [mnemonic, setMnemonic] = useState("");
  const [error, setError] = useState("false");
  const { account, setAccount } = useAccountStore();

  const importAcc = () => {
    // if (!isValidMnemonic(mnemonic)) {
    //   return setError("Invalid seed phrase");
    // }
    const account = mnemonicToAccount(mnemonic);
    setAccount(account);
  };
  return (
    <PageWrapper>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <View style={{ height: "100%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 30,
            }}
          >
            <View
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <View style={{ position: "absolute", left: 0, top: -2 }}>
                <Button
                  onPress={() => navigation.navigate("Greeting")}
                  theme="secondary"
                  leftIcon
                >
                  <Icon name="arrow-left" color={Colors.primary50} size={30} />
                </Button>
              </View>
              <View style={styles.header}>
                <Text style={styles.headerText}>Import existing wallet</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                display: "flex",
                width: "100%",
                marginTop: 30,
              }}
            ></View>
          </View>

          <TextInput
            multiline={true}
            numberOfLines={4}
            style={{
              backgroundColor: Colors.primary500,
              borderColor: Colors.primary300,
              borderWidth: 1,
              borderRadius: 8,
              height: 200,
              padding: 10,
            }}
            onChangeText={(value) => setMnemonic(value)}
            value={mnemonic}
          />

          <Button
            theme={"primary"}
            title={"Import"}
            onPress={() => {
              importAcc();
              navigation.navigate("HomeScreen");
            }}
          />
        </View>
      </View>
    </PageWrapper>
  );
};
