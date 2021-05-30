import { ApolloProvider, useApolloClient } from "@apollo/client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { useApollo } from "../apollo";
import { CartProvider } from "../CartProvider";
import { useRouter } from "next/router";
import "./_app.css";
import ThanhTieuDe from "../components/ThanhTieuDe";
import ChanTrang from "../components/ChanTrang";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  
  return (
    <Box bg="#F0F0F0"> 
       <ApolloProvider client={apolloClient}>
    <CartProvider>
      <ChakraProvider>
          {/* Đầu trang */}
          <ThanhTieuDe/>

        <Component {...pageProps} />

        {/* Chân trang */}
        <ChanTrang/>
      </ChakraProvider>
    </CartProvider>
  </ApolloProvider>

    </Box>
  
  );
};
export default MyApp;
