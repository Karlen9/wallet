import {
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  View,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Button, Colors, PageWrapper, useImportAccount, Text } from "shared";
import { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "./styles";

export const ImportWalletPage = ({ navigation }) => {
  const [mnemonic, setMnemonic] = useState("");
  const { importAccount, isValid } = useImportAccount(mnemonic);
  const [isLoading, setIsLoading] = useState(false);

  const onImport = () => {
    setIsLoading(true);
    setTimeout(() => {
      importAccount().then(() => {
        setIsLoading(false);
        navigation.navigate("HomeScreen");
      });
    });
  };

  return (
    <PageWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
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
                isValid || mnemonic === ""
                  ? styles.textInput
                  : styles.invalidTextInput
              }
              underlineColorAndroid="transparent"
              returnKeyType="search"
              autoCapitalize="none"
              onChangeText={(value) => setMnemonic(value)}
              value={mnemonic}
              placeholder="Your seed phrase"
              placeholderTextColor={Colors.primary50}
            />
            {isValid || mnemonic === "" ? null : (
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
