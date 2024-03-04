import { testPublicClient } from "app/publicClient";
import { formatEther } from "ethers";
import { useEffect, useState } from "react";
import { Hex } from "viem";

export const useGetEthBalance = (address: Hex) => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    if (!address) return;
    try {
      testPublicClient.getBalance({ address: address as Hex }).then((res) => {
        setBalance(formatEther(res));
      });
    } catch (err) {
      console.error(err);
    }
  }, [address]);

  return { balance };
};
