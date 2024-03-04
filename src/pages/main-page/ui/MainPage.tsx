import { useAuthStore } from "app/store";
import { View } from "react-native";
import { PageWrapper, storePrivateKey } from "shared";
import { UserActions } from "widgets/user-actions/ui/UserActions";
import { StatusBar, Platform } from "react-native";
import { useEffect, useState } from "react";
import { publicClient } from "app/publicClient";
import { formatEther } from "ethers";
import { usePkeyToAddress } from "shared/hooks/usePkeyToAddress";
import { TokenContainer } from "widgets/token-container/ui/TokenContainer";

export const MainPage = ({ navigation }) => {
  const [balance, setBalance] = useState("");
  const { address } = usePkeyToAddress();

  useEffect(() => {
    if (!address) return;
    publicClient.getBalance({ address, blockTag: "safe" }).then((res) => {
      setBalance(formatEther(res));
    });
  }, [address]);

  // const onDeleteAccount = () => {
  //   storePrivateKey("");
  //   navigation.navigate("Greeting");
  // };

  return (
    <PageWrapper noPadding>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <View
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <UserActions
          navigation={navigation}
          address={address}
          balance={balance}
        />
        <TokenContainer address={address} />
        {/* <Button theme="primary" onPress={onDeleteAccount}>
          <Text>Delete account</Text>
        </Button> */}
      </View>
    </PageWrapper>
  );
};
