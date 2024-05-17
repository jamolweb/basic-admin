import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import "./index.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}
