import { MoralisNextApi } from "@moralisweb3/next";

export default MoralisNextApi({
  apiKey: process.env.NEXT_PUBLIC_MORALIS_PROJECT_KEY,
  authentication: {
    domain: process.env.NEXT_PUBLIC_APP_DOMAIN,
    uri: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
    timeout: 120,
  },
});
