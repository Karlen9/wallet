import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const EthereumIcon = ({ width }) => {
  return (
    <Svg
      width={width ?? 1535}
      height={2500}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 417"
    >
      <Path
        fill="#CFF57E"
        d="m127.961 0-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
      />
      <Path fill="#C3F1A7" d="M127.962 0 0 212.32l127.962 75.639V154.158z" />
      <Path
        fill="#CCF489"
        d="m127.961 312.187-1.575 1.92v98.199l1.575 4.6L256 236.587z"
      />
      <Path
        fill="#ABE9FD"
        d="M127.962 416.905v-104.72L0 236.585zM127.961 287.958l127.96-75.637-127.96-58.162z"
      />
      <Path fill="#BCEFC2" d="m0 212.32 127.96 75.638v-133.8z" />
    </Svg>
  );
};
