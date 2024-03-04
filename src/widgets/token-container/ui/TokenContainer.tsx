import { View } from "react-native";
import { Token } from "./Token";
import { Hex } from "viem";
import { erc20ABI } from "./erc20ABI";
import { contracts } from "shared/constants/contracts";
import { Button, PageWrapper } from "shared";
import { _1_inchABI } from "./oneInchABI";

export const TokenContainer = ({ address }: { address: Hex }) => {
  const tokens = [
    {
      tokenName: "USDT",
      tokenContact: contracts.USDT,
      tokenABI: erc20ABI,
    },
    {
      tokenName: "USDC",
      tokenContact: contracts.USDC,
      tokenABI: erc20ABI,
    },
    {
      tokenName: "1inch",
      tokenContact: contracts._1_inch,
      tokenABI: _1_inchABI,
    },
  ];
  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "space-between" }}>
      <View style={{ rowGap: 10 }}>
        {tokens.map((token) => (
          <Token
            key={token.tokenContact}
            tokenName={token.tokenName}
            address={address}
            tokenABI={token.tokenABI}
            tokenContract={token.tokenContact}
          />
        ))}
      </View>

      <View>
        <Button title="Import Token" />
      </View>
    </View>
  );
};
