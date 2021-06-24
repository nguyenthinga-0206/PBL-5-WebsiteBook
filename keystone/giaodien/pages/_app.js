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
import { CreateGioHang } from "../components/GioHang/Create/CreateGioHang";
import { ChatProvider } from "../Chat";
import RoomItem from "../components/Room/Item";
import RoomItemUI from "../components/Room/Item/UI";
function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <CreateGioHang />
        <Box bg="#F0F0F0">
          {/* Đầu trang */}
          {/* <ThanhTieuDe UI={ThanhTieuDeUI} /> */}
          {/* <ChatProvider> */}
            <Component {...pageProps} />
            <RoomItem UI={RoomItemUI} />
          {/* </ChatProvider> */}
          {/* <Component {...pageProps} />
          <RoomItem UI={RoomItemUI} /> */}
          {/* Chân trang */}
          {/* <ChanTrang UI={ChanTrangUI} /> */}
        </Box>
      </ApolloProvider>
    </ChakraProvider>
  );
}
export default MyApp;
