import { View } from "react-native";
import { PageWrapper } from "shared";
import { UserActions } from "widgets/user-actions/ui/UserActions";
import { StatusBar, Platform } from "react-native";
import { useEffect } from "react";
import { usePkeyToAddress } from "shared/hooks/usePkeyToAddress";
import { useGetEthBalance } from "shared/hooks/useGetEthBalance";

export const MainPage = ({ navigation }) => {
  const { address } = usePkeyToAddress();
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
        <UserActions navigation={navigation} address={address} />
        {/* <TokenContainer address={address} /> */}
        {/* <Button theme="primary" onPress={onDeleteAccount}>
          <Text>Delete account</Text>
        </Button> */}
      </View>
    </PageWrapper>
  );
};
