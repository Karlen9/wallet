import * as SecureStore from "expo-secure-store";

export const storeUserMnemonic = async (mnemonic: string) => {
  if (!mnemonic) return;
  try {
    await SecureStore.setItemAsync("user_mnemonic", mnemonic);
  } catch (err) {
    console.error(err);
  }
};
