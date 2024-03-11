import {
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
} from "react-native";
import {
  Button,
  Colors,
  PageWrapper,
  useImportAccount,
  Text,
  getIsAuth,
} from "shared";
import { useEffect, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "./styles";
import { useAuthStore } from "app/store";

export const ImportWalletPage = ({ navigation }) => {
  const [mnemonicOrPrKey, setMnemonicOrPrKey] = useState("");
  const { importAccount, isValid } = useImportAccount(
    mnemonicOrPrKey,
    navigation
  );
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useAuthStore();

  const onImport = () => {
    setIsLoading(true);
    importAccount();
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("import " + getIsAuth());
  }, [getIsAuth()]);

  return (
    <PageWrapper>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View>
          <View>
            <View style={{ position: "absolute", left: 0, top: 0 }}>
              <Button
                onPress={() => navigation.navigate("Greeting")}
                theme="secondary"
                leftIcon
              >
                <FontAwesome6
                  name="chevron-left"
                  color={Colors.primary50}
                  size={24}
                />
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
          <View>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              style={
                isValid || mnemonicOrPrKey === ""
                  ? styles.textInput
                  : styles.invalidTextInput
              }
              underlineColorAndroid="transparent"
              returnKeyType="search"
              autoCapitalize="none"
              onChangeText={(value) => setMnemonicOrPrKey(value)}
              value={mnemonicOrPrKey}
              placeholder="Private key or recovery phrase"
              placeholderTextColor={Colors.primary100}
            />
            {isValid || mnemonicOrPrKey === "" ? null : (
              <View style={styles.invalidTextContainer}>
                <Text style={styles.invalidText}>Invalid mnemonic</Text>
              </View>
            )}
          </View>
        </View>

        <Button
          disable={isLoading}
          theme={"primary"}
          style={styles.importButton}
          title={!isLoading ? "Import" : ""}
          onPress={onImport}
        >
          {isLoading ? <ActivityIndicator color={Colors.primary1000} /> : null}
        </Button>
      </KeyboardAvoidingView>
    </PageWrapper>
  );
};
