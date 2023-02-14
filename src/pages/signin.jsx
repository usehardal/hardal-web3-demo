import { useConnect } from "wagmi";
import { getSession } from "next-auth/react";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

function SignIn() {
  const { connectAsync } = useConnect();

  const handleAuth = async () => {
    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const userData = { address: account, chainId: chain.id };

    console.log(userData);
  };

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={handleAuth}>Authenticate via Metamask</button>
    </div>
  );
}
export default SignIn;
