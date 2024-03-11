import { View, StyleSheet, Alert } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { ActionButton } from "./ActionButton";
import { Button, Colors, Text } from "shared";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Hex } from "viem";
import { useEffect } from "react";
import { useGetEthBalance } from "shared/hooks/useGetEthBalance";
type TUserActionProps = {
  address?: Hex;
  navigation: any;
};

export const UserActions = ({ address, navigation }: TUserActionProps) => {
  const { balance, refresh } = useGetEthBalance(address);
  useEffect(() => {
    refresh();
  }, []);

  return (
    <LinearGradient style={styles.container} colors={["#CFF57E", "#ABE9FD"]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingTop: 20,
        }}
      >
        <Button theme="secondary">
          <MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
        </Button>
        <Button
          theme="secondary"
          onPress={() => navigation.navigate("ScanPage")}
        >
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
        </Button>
      </View>
      <View style={{ paddingVertical: 30 }}>
        <Text
          style={{ fontSize: 36, fontWeight: "bold" }}
        >{`${balance?.substring(0, 8)} ETH`}</Text>
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
