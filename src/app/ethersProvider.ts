import { ethers } from "ethers";

export const provider = new ethers.JsonRpcProvider(
  "https://endpoints.omniatech.io/v1/eth/sepolia/public"
);
