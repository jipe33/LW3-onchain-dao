import "@rainbow-me/rainbowkit/styles.css";
import "@/styles/globals.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { alchemyProvider } from 'wagmi/providers/alchemy';

const { chains, publicClient } = configureChains([sepolia], [alchemyProvider({ apiKey: 'rl-mT0SlHhzqwJGrCQ-gQbzydwXDbazu' })]);

const { connectors } = getDefaultWallets({
  appName: "CryptoDevs DAO",
  projectId: "dfb62706856072f2ced0da5b844db24e",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}