import { HDAccount, PrivateKeyAccount } from "viem";
import { create } from "zustand";

type AuthState = {
  isAuth: boolean;
  setAuth: (value: boolean) => void;
};

type LoadingState = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

type AccountState = {
  account: HDAccount | PrivateKeyAccount;
  setAccount: (value: HDAccount | PrivateKeyAccount) => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  isAuth: false,
  setAuth: (value) => set({ isAuth: value }),
}));

export const useIsLoading = create<LoadingState>()((set) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),
}));

export const useAccountStore = create<AccountState>()((set) => ({
  account: null,
  setAccount: (value) => set({ account: value }),
}));
