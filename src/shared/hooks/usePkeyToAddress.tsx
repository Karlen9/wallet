import { useEffect, useState } from "react";
import { getPrivateKeyFromStore } from "shared/utils/encrypted-store/getPrivateKeyFromStore";
import { Hex } from "viem";
import { computeAddress, isHexString } from "ethers";

export const usePkeyToAddress = (): {
  address: Hex;
} => {
  const [address, setAddress] = useState<Hex>();
  useEffect(() => {
    getPrivateKeyFromStore().then((res) => {
      if (isHexString(res)) {
        const address = computeAddress(res);
        setAddress(address as Hex);
      }
    });
  }, []);

  return { address };
};
