import * as SecureStore from "expo-secure-store";

export const getIsAuth = (): string => {
  try {
    return SecureStore.getItem("is_auth");
  } catch (err) {
    console.error(err);
  }
};
