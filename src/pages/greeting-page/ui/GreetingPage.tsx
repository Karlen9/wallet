import { useEffect, useState } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import { Button, Colors, PageWrapper, Text, getIsAuth } from "shared";
import { useCreateAccount } from "shared/hooks/useCreateAccount";
import styles from "./styles";

export const GreetingPage = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { createAccount } = useCreateAccount();

  const importWallet = () => {
    navigation.navigate("ImportWallet");
  };

  useEffect(() => {
    console.log("getIsAuth " + getIsAuth());
  }, []);

  const onCreateAccount = () => {
    setIsLoading(true);
    setTimeout(() => {
      createAccount();
      setIsLoading(false);
      navigation.navigate("Mnemonic");
    });
  };

  return (
    <PageWrapper>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <View style={styles.mainContainer}>
          <Text style={styles.header}>
            {`Meet the new ${"\n"}secure ${"\n"}crypto wallet.`}
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Button
            disable={isLoading}
            theme={"primary"}
            title={!isLoading ? "Create an account" : ""}
            onPress={onCreateAccount}
          >
            {isLoading ? (
              <ActivityIndicator color={Colors.primary1000} />
            ) : null}
          </Button>
          <Button
            title="Import wallet"
            style={{ marginTop: 20, width: "100%", alignItems: "center" }}
            onPress={importWallet}
            theme="secondary"
          />
        </View>
      </View>
    </PageWrapper>
  );
};
