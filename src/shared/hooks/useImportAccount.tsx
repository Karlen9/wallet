import { useAccountStore, useMnemonicStore } from "app/store";
import { generateMnemonic, validateMnemonic, wordlists } from "bip39";
import { useEffect, useState } from "react";
import { HDAccount } from "viem";
import { mnemonicToAccount } from "viem/accounts";

export const useImportAccount = (
  mnemonic: string
): {
  isValid: boolean;
  importAccount: () => Promise<{ account: HDAccount }>;
} => {
  const { setAccount } = useAccountStore();
  const { setMnemonic } = useMnemonicStore();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (validateMnemonic(mnemonic.trim())) return setIsValid(true);
    setIsValid(false);
  }, [mnemonic]);
  const importAccount = () => {
    return new Promise<{ account: HDAccount }>((resolve) => {
      const account = mnemonicToAccount(mnemonic);
      setAccount(account);
      setMnemonic(mnemonic);

      resolve({ account });
    });
  };

  return { importAccount, isValid };
};
