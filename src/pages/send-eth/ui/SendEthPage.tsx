import { ethers, FeeData, formatEther, parseUnits, Wallet } from "ethers";
import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { Button, Colors, PageWrapper, SendModal, Text } from "shared";
import { useGetEthBalance } from "shared/hooks/useGetEthBalance";
import { usePkeyToAddress } from "shared/hooks/usePkeyToAddress";
import { Hex, isHex } from "viem";
import { FontAwesome6 } from "@expo/vector-icons";
import { sepolia } from "viem/chains";
import { getSigner } from "app/signer";
import { provider } from "app/ethersProvider";

export const SendEthPage = ({ navigation }) => {
  const [estFee, setEstFee] = useState("");
  const [isSendModal, setIsSendModal] = useState(false);
  const [amount, setAmount] = useState("0");
  const [toAddress, setToAddress] = useState<Hex>();
  const [signer, setSigner] = useState<Wallet>();
  const { address } = usePkeyToAddress();
  const { balance, refresh } = useGetEthBalance(address);

  useEffect(() => {
    console.log({ balance });
    getSigner().then((res) => setSigner(res));
  }, []);

  const txCost = Number(amount) + Number(estFee);
  const isEnoughBalance = balance && Number(balance) >= txCost;

  useEffect(() => {
    console.log({ isEnoughBalance });
  }, [isEnoughBalance]);

  const transaction = {
    from: address,
    to: toAddress,
    value: isEnoughBalance ? parseUnits(amount) : "0",
    chainId: sepolia.id,
  };

  const onSendEth = async () => {
    if (!isEnoughBalance) return;
    if (!signer) return;
    const gasPrice = (await provider.getFeeData()).gasPrice;
    const estimateGas = await signer?.estimateGas(transaction);
    // const maxGasPrice = (await provider.getFeeData()).maxFeePerGas
    // const gasPrice = new ethers.FeeData().gasPrice;
    setEstFee(formatEther(estimateGas * gasPrice));
  };

  const onConfirm = async () => {
    if (!isEnoughBalance || !amount || !toAddress) return;
    setIsSendModal(true);
  };

  useEffect(() => {
    onSendEth();
  }, [amount, toAddress]);

  return (
    <PageWrapper>
      <SendModal
        isOpen={isSendModal}
        setIsOpen={setIsSendModal}
        tx={transaction}
        signer={signer}
        txCost={txCost}
        estFee={estFee}
        navigation={navigation}
      />
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
              style={styles.textInput}
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
        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          <Button
            disable={!isEnoughBalance || !amount || !toAddress}
            theme="primary"
            title="Next"
            onPress={onConfirm}
          />
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
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    fontSize: 12,
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
