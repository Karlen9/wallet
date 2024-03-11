import { isHexString } from "ethers";

export const isPrivateKey = (value: string): boolean => {
  if (value.length === 64) {
    return isHexString(`0x${value.trim()}`);
  }

  return false;
};
