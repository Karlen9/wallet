import * as SecureStore from "expo-secure-store";

export const getPrivateKeyFromStore = async (): Promise<string> => {
  try {
    return await SecureStore.getItemAsync("private_key");
  } catch (err) {
    console.error(err);
  }
};
