import { provider } from "app/ethersProvider";
import { formatEther } from "ethers";
import { useEffect, useState } from "react";
import { Hex } from "viem";

export const useGetEthBalance = (
  address: Hex
): {
  balance: string;
  refresh: () => void;
} => {
  const [balance, setBalance] = useState<string>();

  const getBalance = async () => {
    if (!address) return;
    await provider.getBalance(address).then((res) => {
      const ethValue = formatEther(res);
      setBalance(ethValue);
    });
  };

  useEffect(() => {
    if (!address) return;
    try {
      getBalance();
    } catch (err) {
      console.error(err);
    }
  }, [address]);

  return { balance, refresh: getBalance };
};
