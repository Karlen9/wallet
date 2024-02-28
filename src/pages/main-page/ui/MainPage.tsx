import { useAccountStore } from "app/store";
import { View } from "react-native";
import { Text } from "shared";
import { Colors, PageWrapper } from "shared";
import { UserActions } from "widgets/user-actions/ui/UserActions";
import { StatusBar, Platform } from "react-native";

export const MainPage = () => {
  const { account } = useAccountStore();
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
        <UserActions />
      </View>
    </PageWrapper>
  );
};
