import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Moralis from "moralis";
import { useEvmNativeBalance } from "@moralisweb3/next";
import { EvmChain } from "@moralisweb3/evm-utils";

export default function Home() {
  const address = "";
  const { data: nativeBalance } = useEvmNativeBalance({ address });

  console.log(nativeBalance);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {address && (
          <>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
          </>
        )}
      </main>
    </>
  );
}