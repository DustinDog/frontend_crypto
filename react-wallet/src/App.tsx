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
import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";

import SenOnelamport from "./SenOnelamport";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/Aboutpage";
import Faqpage from "./pages/Faqpage";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </Context>
  );
}

export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
  const network = WalletAdapterNetwork.Testnet;
  const endpoint = clusterApiUrl(network);

  // Mainnet ->
  // const endpoint = "https://tame-wiser-slug.solana-mainnet.quiknode.pro/00fe9d223ec874bd9d4ea1ef268bbd73c71dd5a1/"
  // Testnet ->
  // const endpoint = "https://bold-proportionate-glitter.solana-testnet.quiknode.pro/9801f3d77005514ad278d3765b9451b393af2f2e/"

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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cinema" element={<AboutPage />} />
        <Route path="/howto" element={<MainPage />} />
        <Route path="/faq" element={<Faqpage />} />
      </Routes>
    </>
  );
};
