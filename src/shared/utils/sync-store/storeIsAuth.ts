import * as SecureStore from "expo-secure-store";

export const storeIsAuth = (isAuth: string) => {
  try {
    SecureStore.setItem("is_auth", isAuth);
  } catch (err) {
    console.error(err);
  }
};
