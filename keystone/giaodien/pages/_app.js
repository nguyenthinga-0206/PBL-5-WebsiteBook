import { ChakraProvider } from "@chakra-ui/react";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
