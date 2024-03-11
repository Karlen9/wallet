import { createWalletClient, http } from "viem";
import { sepolia } from "viem/chains";

export const testWalletClient = createWalletClient({
  chain: sepolia,
  transport: http("https://rpc2.sepolia.org"),
});
