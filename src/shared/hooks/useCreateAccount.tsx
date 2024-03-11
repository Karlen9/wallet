import { useAuthStore } from "app/store";
import { Wallet, ethers } from "ethers";
import { useState } from "react";
import { storePrivateKey, storeUserMnemonic } from "shared/utils";
import { Hex } from "viem";

export const useCreateAccount = (): {
  createAccount: () => void;
  account: Wallet;
} => {
  const { setAuth } = useAuthStore();
  const [address, setAddress] = useState(null);
  const createAccount = () => {
    const wallet = ethers.Wallet.createRandom();
    setAuth(true);
    setAddress(wallet.address);
    storePrivateKey(wallet.privateKey as Hex);
    storeUserMnemonic(wallet.mnemonic.phrase);
  };

  return { createAccount, account: address };
};
