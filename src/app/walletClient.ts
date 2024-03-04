import { createWalletClient, http } from "viem";
import { mainnet } from "viem/chains";

export const walletClient = createWalletClient({
  chain: mainnet,
  transport: http("https://eth.drpc.org"),
});
