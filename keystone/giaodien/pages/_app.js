import { ApolloProvider, useApolloClient } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { useApollo } from "../apollo";
import { CartProvider } from "../CartProvider";
import { useRouter } from "next/router";
import "./_app.css";
import{
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Input,
  Link,
  Popover,
  PopoverTrigger,
  Container,
  SimpleGrid,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/react";
import ThanhTieuDe from "../components/ThanhTieuDe";
import ChanTrang from "../components/ChanTrang";
// import ThanhTieuDe from "../../chiagiaodien/ThanhTieuDe";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);
  
  const ListHeader = () => {
    return <Text fontWeight={"500"} fontSize={"lg"} mb={2}></Text>;
  };
  const router = useRouter();
  
  return (
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
  );
};
export default MyApp;
