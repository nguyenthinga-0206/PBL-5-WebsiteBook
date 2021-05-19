import { ApolloProvider, useApolloClient } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
// import "../styles/globals.css";
import { useApollo } from "../apollo";
import { CartProvider } from "../CartProvider";
import "./_app.css";
function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <CartProvider>
        <ChakraProvider>
        
          <Component {...pageProps} />
          <h2>Chan Trang</h2>
        </ChakraProvider>
      </CartProvider>
    </ApolloProvider>
  );
}

export default MyApp;
