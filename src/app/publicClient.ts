import { createPublicClient, http } from "viem";
import { mainnet, sepolia } from "viem/chains";

export const testPublicClient = createPublicClient({
  chain: sepolia,
  transport: http("https://rpc2.sepolia.org"),
});

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http("https://eth.drpc.org"),
});
