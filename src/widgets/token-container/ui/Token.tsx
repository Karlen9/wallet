import { publicClient } from "app/publicClient";
import { useEffect, useState } from "react";
import { Colors, Text } from "shared";
import { toNumber } from "ethers";
import { Hex } from "viem";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export const Token = ({
  address,
  tokenABI,
  tokenContract,
  tokenName,
}: {
  address: Hex;
  tokenList?: string[];
  tokenABI: any;
  tokenContract: Hex;
  tokenName: string;
}) => {
  const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    const data = (await publicClient.readContract({
      address: tokenContract,
      abi: tokenABI,
      functionName: "balanceOf",
      args: [address],
    })) as string;
    setBalance(toNumber(data) / Math.pow(10, 6));
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "transparent",
        width: "100%",
        borderRadius: 10,
        borderColor: Colors.primary100,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      <Text style={{ color: Colors.primary100 }}>{tokenName}</Text>
      <Text style={{ color: Colors.primary100 }}>{balance.toString()}</Text>
    </View>
  );
};
