import * as SecureStore from "expo-secure-store";
export const getMenmonicFromStore = async (): Promise<string> => {
  try {
    return await SecureStore.getItemAsync("user_mnemonic");
  } catch (err) {
    console.error(err);
  }
};
