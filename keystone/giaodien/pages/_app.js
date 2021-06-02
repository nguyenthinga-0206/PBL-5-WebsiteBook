import { ApolloProvider, useApolloClient } from "@apollo/client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { useApollo } from "../apollo";
import { CartProvider } from "../CartProvider";
import { useRouter } from "next/router";
import "./_app.css";
import ThanhTieuDe from "../components/ThanhTieuDe";
import ThanhTieuDeUI from "../components/ThanhTieuDe/UI";
import ChanTrang from "../components/ChanTrang";
import ChanTrangUI from "../components/ChanTrang/UI";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <CartProvider>
          <Box bg="#F0F0F0">
            {/* Đầu trang */}
            {/* <ThanhTieuDe UI={ThanhTieuDeUI} /> */}

            <Component {...pageProps} />

            {/* Chân trang */}
            <ChanTrang UI={ChanTrangUI} />
          </Box>
        </CartProvider>
      </ApolloProvider>

    </ChakraProvider>

  );
};
export default MyApp;
