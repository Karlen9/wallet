import { View, StyleSheet } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { ActionButton } from "./ActionButton";
import { Colors, Text } from "shared";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetEthBalance } from "shared/hooks/useGetEthBalance";
import { Hex } from "viem";

type TUserActionProps = {
  address?: Hex;
  balance?: string;
  navigation: any;
};

export const UserActions = ({ address, navigation }: TUserActionProps) => {
  const { balance } = useGetEthBalance(address);

  // const onSendEth = async () => {
  //   const request = await walletClient.prepareTransactionRequest({
  //     account: address,
  //     to: toAddress,
  //     value: parseEther(amount),
  //     chain: mainnet,
  //     nonce: await publicClient.getTransactionCount({
  //       address,
  //     }),
  //   });

  //   const gasPrice = await publicClient.getGasPrice();
  //   const gasLimit = await publicClient.estimateGas(request);
  //   const estimateTxFee = ethers.formatEther((gasLimit * gasPrice).toString());
  //   setEstFee(estimateTxFee);
  //   setIsSendModal(true);
  // };

  // const sendEth = async () => {
  //   const request = await walletClient.prepareTransactionRequest({
  //     account: address,
  //     to: toAddress,
  //     value: parseEther(amount),
  //     chain: mainnet,
  //     nonce: await publicClient.getTransactionCount({
  //       address,
  //     }),
  //   });

  //   const gasPrice = await publicClient.getGasPrice();
  //   const gasLimit = await publicClient.estimateGas(request);
  //   const estimateTxFee = ethers.formatEther((gasLimit * gasPrice).toString());
  //   // const gasLimit = estimateGas(request as SignTransactionParameters)

  //   // const signature = await walletClient.signTransaction(
  //   //   request as SignTransactionParameters
  //   // );

  //   // const hash = await walletClient
  //   //   .sendRawTransaction({
  //   //     serializedTransaction: signature,
  //   //   })
  //   //   .finally(() => {
  //   //     setTransactionSend(true);
  //   //   });

  //   // console.log(hash);
  // };

  return (
    <LinearGradient style={styles.container} colors={["#CFF57E", "#ABE9FD"]}>
      <View style={{ paddingVertical: 50 }}>
        <Text
          style={{ fontSize: 36, fontWeight: "bold" }}
        >{`${balance.substring(0, 7)} ETH`}</Text>
      </View>
      <Text>{address}</Text>
      <View style={styles.buttonContainer}>
        <ActionButton
          onPress={() => {}}
          position="left"
          title="Recieve"
          icon={<Feather name="download" color={Colors.primary50} size={30} />}
        />
        <ActionButton
          position="center"
          onPress={() => {}}
          title="scan"
          icon={
            <MaterialCommunityIcons
              name="line-scan"
              color={Colors.primary50}
              size={30}
            />
          }
        />
        <ActionButton
          position="right"
          onPress={() => {
            navigation.navigate("SendEth");
          }}
          title="send"
          icon={
            <MaterialCommunityIcons
              name="send"
              color={Colors.primary50}
              size={30}
            />
          }
        />
      </View>
    </LinearGradient>
  );
};

// console.log(account);

// const onRecieve = async () => {
//   try {
//     await testClient.setBalance({
//       address: account.address,
//       value: parseEther("1"),
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// const impersonateAccount = async () => {
//   try {
//     await testClient.impersonateAccount({
//       address: account.address,
//     });
//   } catch (err) {
//     console.log("impers err " + err);
//   }
// };

const modal = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    width: "70%",

    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 20,
    backgroundColor: Colors.primary300,
  },
  textStyle: {
    textAlign: "center",
    color: Colors.primary500,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
