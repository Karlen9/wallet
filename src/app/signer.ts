import { ethers } from "ethers";
import { provider } from "./ethersProvider";
import { getPrivateKeyFromStore } from "shared/utils/encrypted-store/getPrivateKeyFromStore";

export const getSigner = () =>
  getPrivateKeyFromStore().then((res) => {
    return new ethers.Wallet(res, provider);
  });
