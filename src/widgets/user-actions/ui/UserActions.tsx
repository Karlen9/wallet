import { View } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { ActionButton } from "./ActionButton";
import { Colors, Text } from "shared";
import { useAccountStore } from "app/store";
import { publicClient } from "app/publicClient";
import { formatEther } from "viem";
import { useEffect, useState } from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export const UserActions = () => {
  const { account } = useAccountStore();
  const [balance, setBalance] = useState("");

  useEffect(() => {
    publicClient
      .getBalance({ address: account.address ?? "0x" })
      .then((res) => {
        setBalance(formatEther(res));
      });
  }, []);
  return (
    <LinearGradient style={styles.container} colors={["#CFF57E", "#ABE9FD"]}>
      <View style={{ paddingVertical: 50 }}>
        <Text
          style={{ fontSize: 36, fontWeight: "bold" }}
        >{`${balance.substring(0, 7)} ETH`}</Text>
      </View>
      <Text>{account.address}</Text>
      <View style={styles.buttonContainer}>
        <ActionButton
          position="left"
          title="Recieve"
          icon={<Feather name="download" color={Colors.primary50} size={30} />}
        />
        <ActionButton
          position="center"
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
