import { Hex } from "viem";
import * as SecureStore from "expo-secure-store";

export const storePrivateKey = async (privateKey: Hex | "") => {
  try {
    await SecureStore.setItemAsync("private_key", privateKey);
  } catch (err) {
    console.error(err);
  }
};
