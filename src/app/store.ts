import { HDAccount } from "viem";
import { create } from "zustand";

type AuthState = {
  isAuth: boolean;
  setAuth: (value: boolean) => void;
};

type MnemonicState = {
  mnemonic: string;
  setMnemonic: (value: string) => void;
};

type AccountState = {
  account: HDAccount;
  setAccount: (value: HDAccount) => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  isAuth: false,
  setAuth: (value) => set({ isAuth: value }),
}));

export const useMnemonicStore = create<MnemonicState>()((set) => ({
  mnemonic: "",
  setMnemonic: (value) => set({ mnemonic: value }),
}));

export const useAccountStore = create<AccountState>()((set) => ({
  account: null,
  setAccount: (value) => set({ account: value }),
}));
