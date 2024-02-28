import { useAccountStore, useMnemonicStore } from "app/store";
import { generateMnemonic } from "bip39";
import { useState } from "react";
import { HDAccount } from "viem";
import { mnemonicToAccount } from "viem/accounts";

export const useCreateAccount = (): {
  createAccount: () => Promise<{ account: HDAccount }>;
  account: Promise<HDAccount>;
} => {
  const { setAccount } = useAccountStore();
  const { setMnemonic } = useMnemonicStore();
  const [createdAccount, setCreatedAccount] = useState(null);
  const createAccount = () => {
    return new Promise<{ account: HDAccount }>((resolve) => {
      const newMnemonic = generateMnemonic();
      const account = mnemonicToAccount(newMnemonic);
      setCreatedAccount(createdAccount);
      setAccount(account);
      setMnemonic(newMnemonic);

      resolve({ account: createdAccount });
    });
  };

  return { createAccount, account: createdAccount };
};
