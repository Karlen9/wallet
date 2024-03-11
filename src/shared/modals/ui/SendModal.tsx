import {
  TransactionRequest,
  TransactionResponse,
  Wallet,
  formatEther,
} from "ethers";
import { Modal, View, StyleSheet, ActivityIndicator } from "react-native";
import { Button } from "shared/button/ui/Button";
import { Colors } from "shared/styles";
import { Text } from "shared/text/ui/Text";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";

type TSendModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  tx: TransactionRequest;
  signer: Wallet;
  txCost: number;
  estFee: string;
  navigation: any;
};

export const SendModal = ({
  isOpen,
  setIsOpen,
  tx,
  signer,
  txCost,
  estFee,
  navigation,
}: TSendModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hash, setHash] = useState<TransactionResponse>();
  const onConfirm = async () => {
    setIsLoading(true);
    await signer?.sendTransaction(tx).then((res) => {
      setIsLoading(false);
      setHash(res);
      navigation.navigate("HomeScreen");
    });
  };

  if (!tx)
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Text>loading</Text>
      </Modal>
    );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        setIsOpen(!isOpen);
      }}
    >
      <View style={styles.container}>
        <View>
          <View>
            <View style={{ position: "absolute", left: -5, top: -5 }}>
              <Button
                onPress={() => setIsOpen(false)}
                style={{ padding: 5 }}
                theme="secondary"
                leftIcon
              >
                <Fontisto name="close-a" size={20} color={Colors.primary50} />
              </Button>
            </View>
            <View style={styles.header}>
              <Text style={styles.headerText}>Transfer</Text>
            </View>
          </View>
          <View style={styles.upperContainer}>
            <Text style={styles.headerValue}>{`-${formatEther(
              tx.value
            )} ETH`}</Text>
          </View>

          <View style={styles.txInfoWrapper}>
            <View>
              <Text style={styles.txInfoText}>Asset:</Text>
              <Text style={{ color: Colors.secondary501 }}>Ethereum</Text>
            </View>
            <View>
              <Text style={styles.txInfoText}>From: </Text>
              <Text style={{ color: Colors.secondary501 }}>
                {tx.from?.toString()}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.txInfoText}>To: </Text>
              <Text style={{ color: Colors.secondary501 }}>
                {tx.to?.toString()}
              </Text>
            </View>
          </View>

          <View style={[styles.txInfoWrapper, styles.gasWrapper]}>
            <View style={{ alignItems: "center", width: "100%" }}>
              <Text style={{ color: Colors.primary50 }}>Total spent</Text>
            </View>
            <View>
              <Text style={styles.txInfoText}>Tx fee:</Text>
              <Text style={{ color: Colors.secondary501 }}>
                {`${estFee.substring(0, 12)}`}
              </Text>
            </View>
            <View>
              <Text style={styles.txInfoText}>Ether sending:</Text>
              <Text style={{ color: Colors.secondary501 }}>
                {formatEther(tx.value)}
              </Text>
            </View>
            <View>
              <Text style={styles.txInfoText}>Total amount:</Text>
              <Text style={{ color: Colors.secondary501 }}>
                {txCost.toString().substring(0, 12)}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Button theme="primary" title="Confirm" onPress={onConfirm}>
            {isLoading ? (
              <ActivityIndicator color={Colors.primary1000} />
            ) : null}
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "space-between",
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.modalBg,
    height: "95%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowColor: Colors.primary100,
    shadowRadius: 30,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    padding: 30,
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
  headerValue: {
    color: Colors.primary100,
    fontSize: 20,
  },
  upperContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  txInfoWrapper: {
    rowGap: 10,
    backgroundColor: Colors.secondary600,
    padding: 10,
    borderRadius: 10,
  },
  txInfoText: {
    color: Colors.primary50,
  },
  gasWrapper: {
    marginTop: 20,
  },
});
