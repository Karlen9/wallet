import { testPublicClient } from "app/publicClient";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { Button, Colors, PageWrapper, Text } from "shared";
import { useGetEthBalance } from "shared/hooks/useGetEthBalance";
import { usePkeyToAddress } from "shared/hooks/usePkeyToAddress";
import { Hex, SignTransactionParameters, isHex, parseEther } from "viem";
import { FontAwesome6 } from "@expo/vector-icons";

import { sepolia } from "viem/chains";
import { testWalletClient } from "app/testClient";

export const SendEthPage = ({ navigation }) => {
  const [estFee, setEstFee] = useState("");
  const [amount, setAmount] = useState("");
  const [toAddress, setToAddress] = useState<Hex>();
  const [req, setReq] = useState<SignTransactionParameters>();

  const { address } = usePkeyToAddress();
  const { balance } = useGetEthBalance(address);

  const isEnoughBalance = Number(balance) >= Number(amount);

  const onSendEth = async () => {
    console.log("afef");
    const request = await testWalletClient.prepareTransactionRequest({
      account: address,
      to: toAddress,
      value: parseEther(amount),
      chain: sepolia,
      maxFeePerGas: BigInt(8750000000000),
      maxPriorityFeePerGas: BigInt(1000000000000000),

      nonce: await testPublicClient.getTransactionCount({
        address,
      }),
    });

    setReq(request as SignTransactionParameters);
    console.log("asdfhjlk");

    const gasPrice = await testPublicClient.getGasPrice();
    console.log("fefefeff" + gasPrice);
    const gasLimit = await testPublicClient.estimateGas(request);
    const estimateTxFee = ethers.formatEther((gasLimit * gasPrice).toString());
    setEstFee(estimateTxFee);
  };

  const onConfirm = async () => {
    const signature = await testWalletClient.signTransaction(req);

    const hash = await testWalletClient
      .sendRawTransaction({
        serializedTransaction: signature,
      })
      .finally(() => {});
    console.log(hash);
  };

  useEffect(() => {
    onSendEth();
  }, [amount, toAddress]);

  return (
    <PageWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          justifyContent: "space-between",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StatusBar barStyle="light-content" />

        <View>
          <View style={{ position: "absolute", left: 0, top: 0 }}>
            <Button
              onPress={() => navigation.navigate("HomeScreen")}
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
            <Text style={styles.headerText}>Send ETH</Text>
          </View>
        </View>
        <View style={{ width: "100%", flex: 1, marginTop: 20 }}>
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.inputHeader}>Amount:</Text>
            <TextInput
              editable
              style={{
                borderWidth: 1,
                borderColor: Colors.primary100,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 4,
                width: "100%",
                color: Colors.primary50,
              }}
              keyboardType="numeric"
              value={amount}
              onChangeText={(value) => setAmount(value)}
              underlineColorAndroid="transparent"
              returnKeyType="search"
              autoCapitalize="none"
              placeholder="Eth"
              placeholderTextColor={Colors.primary100}
            />
            {!isEnoughBalance && (
              <Text style={styles.invalidText}>Not enough balance</Text>
            )}
          </View>
          <Text style={styles.inputHeader}>To:</Text>

          <TextInput
            editable
            style={styles.textInput}
            value={toAddress}
            onChangeText={(value) => {
              setToAddress(value as Hex);
            }}
            underlineColorAndroid="transparent"
            returnKeyType="search"
            autoCapitalize="none"
            placeholder="Address"
            placeholderTextColor={Colors.primary100}
          />
          {!isHex(toAddress) && (
            <Text style={styles.invalidText}>Invalid Address</Text>
          )}
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.inputHeader}>{`Estimate fee: ${estFee}`}</Text>
        </View>
        <View style={{ flexDirection: "row", columnGap: 10, marginTop: 30 }}>
          <Button theme="primary" title="Next" onPress={onConfirm} />
        </View>
      </KeyboardAvoidingView>
    </PageWrapper>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginTop: 2,
    color: Colors.primary50,
  },
  headerText: {
    color: Colors.primary50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.primary100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    width: "100%",
    color: Colors.primary50,
  },
  inputHeader: {
    color: Colors.primary100,
  },

  invalidText: {
    color: Colors.secondary500,
    marginLeft: 8,
    marginTop: 4,
  },
});
