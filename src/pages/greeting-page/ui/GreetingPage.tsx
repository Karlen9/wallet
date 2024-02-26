import { useAccountStore, useAuthStore, useMnemonicStore } from "app/store";
import { useCallback, useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Button, Colors, PageWrapper } from "shared";
import { createWalletClient, http } from "viem";
import { goerli } from "viem/chains";

import {
  english,
  mnemonicToAccount,
  generateMnemonic,
  HDAccount,
} from "viem/accounts";

export const GreetingPage = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setAccount } = useAccountStore();
  const { setAuth, isAuth } = useAuthStore();
  const { setMnemonic } = useMnemonicStore();

  const fetchAccount = useCallback(() => {
    return new Promise((resolve) => {
      const newMnemonic = generateMnemonic(english);
      const account = mnemonicToAccount(newMnemonic);
      const client = createWalletClient({
        account,
        chain: goerli,
        transport: http(),
      });
      resolve({ account, mnemonic: newMnemonic });
    });
  }, []);

  const createNewWallet = async () => {
    setIsLoading(true);
    return fetchAccount().then(
      (result: { account: HDAccount; mnemonic: string }) => {
        setIsLoading(false);
        setAccount(result.account);
        setMnemonic(result.mnemonic);
        navigation.navigate("Mnemonic");
      }
    );
  };

  return (
    <PageWrapper>
      <View style={styles.content}>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>
            Meet the new {"\n"}secure {"\n"}crypto wallet.
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Button
            theme={"primary"}
            title={`${isLoading ? "Loading..." : "Create an account"}`}
            onPress={createNewWallet}
          />
        </View>
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  item: {},
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
