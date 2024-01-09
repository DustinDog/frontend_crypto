import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { FC, ReactNode, useMemo } from "react";
import "./App.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";

import SenOnelamport from "./SenOnelamport";

function App() {
  return (
    <Context>
      <Content />
    </Context>
  );
}

export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
  const network = WalletAdapterNetwork.Testnet;

  // const endpoint = clusterApiUrl(network);

  const endpoint = "https://tame-wiser-slug.solana-mainnet.quiknode.pro/00fe9d223ec874bd9d4ea1ef268bbd73c71dd5a1/"

  console.log(endpoint, "endpoint");

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content: FC = () => {
  return (
    <div className="App">
      <WalletMultiButton />
      <SenOnelamport />
    </div>
  );
};
