import { validateMnemonic } from "bip39";
import { useEffect, useState } from "react";
import { isPrivateKey } from "../utils/is-private-key/isPrivateKey";
import { ethers } from "ethers";
import { storePrivateKey, storeUserMnemonic } from "shared/utils";
import { Hex } from "viem";

export const useImportAccount = (
  mnemonicOrPrKey: string,
  navigation: any
): {
  isValid: boolean;
  importAccount: () => void;
} => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (validateMnemonic(mnemonicOrPrKey.trim())) return setIsValid(true);
    if (isPrivateKey(mnemonicOrPrKey)) return setIsValid(true);
    setIsValid(false);
  }, [mnemonicOrPrKey]);

  const importAccount = () => {
    if (!isValid) return;
    const isInputPKey = isPrivateKey(mnemonicOrPrKey);
    const mnemonicWallet = isInputPKey
      ? new ethers.Wallet(mnemonicOrPrKey)
      : ethers.Wallet.fromPhrase(mnemonicOrPrKey);

    !isInputPKey && storeUserMnemonic(mnemonicOrPrKey);
    const privateKey = mnemonicWallet.privateKey as Hex;
    storePrivateKey(privateKey);
    navigation.navigate("HomeScreen");
  };

  return { importAccount, isValid };
};
