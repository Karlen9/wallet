import { View } from "react-native";
import { Colors, PageWrapper } from "shared";
import { Text } from "shared";

export const SwapPage = () => {
  return (
    <PageWrapper>
      <View
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: Colors.primary50 }}>Swap</Text>
      </View>
    </PageWrapper>
  );
};
