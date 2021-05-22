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
            

          <Component {...pageProps} />

          {/* Chân trang */}
          <Box bg={"gray.500"} color={"white"}>
              <Container as={Stack} maxW={"6xl"} py={10}>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stack align={"flex-start"}>
                  <ListHeader>Product</ListHeader>
                  <h1>
                    <b>HAYAKU BOOKS</b>{" "}
                  </h1>
                  <p>--------------------</p>
                  <br />
                  <Link
                    href={
                      "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+B%C3%A1ch+Khoa+-+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+%C4%90%C3%A0+N%E1%BA%B5ng/@16.073801,108.149914,14z/data=!4m5!3m4!1s0x0:0x714561e9f3a7292c!8m2!3d16.0738013!4d108.1499142?hl=vi"
                    }
                  >
                    {" "}
                    <p>
                      <b>Địa chỉ:</b> 54 Nguyễn Lương Bằng,Liên Chiểu, TP. Đà Nẵng
                    </p>
                  </Link>

                  <p>
                    <b>Email: </b> quynhnhuctcn@gmail.com{" "}
                  </p>
                  <br />
                  <p>
                    <b>Số điện thoại: </b> 0987654321
                  </p>
                </Stack>
                <Stack align={"flex-start"}>
                  <ListHeader>Product</ListHeader>
                  <h1>
                    <b>Hỗ Trợ Khách Hàng</b>
                  </h1>
                  <p>--------------------</p>
                  <br />

                  <Link
                    onClick={(event) => {
                      router.push("dieu-khoan-su-dung");
                    }}
                    href={"#"}
                  >
                    Điều khoản sử dùng
                  </Link>
                  <Link
                    onClick={(event) => {
                      router.push("huong-dan-mua-hang");
                    }}
                    href={"#"}
                  >
                    Hướng dẫn mua hàng
                  </Link>
                  <Link href={"#"}>Phương thức thanh toán</Link>
                  <Link href={"#"}>Phương thức giao hàng</Link>
                  <Link href={"#"}>Chính sách đổi trả</Link>
                </Stack>
                <Stack align={"flex-start"}>
                  <ListHeader>Product</ListHeader>
                  <h1>
                    <b>Thông Tin</b>
                  </h1>
                  <p>--------------------</p>
                  <br />
                  <Link href={"#"}>Đăng nhập</Link>
                  <Link href={"#"}>Đăng ký</Link>
                  <Link href={"#"}>Tra cứu đơn hàng</Link>
                  <Link href={"#"}>Giới thiệu HAYAKU BOOKS</Link>
                </Stack>
                <Stack align={"flex-start"}>
                  <ListHeader>Follow Us</ListHeader>
                  <h1>
                    <b>Mạng Xã Hội</b>
                  </h1>
                  <p>--------------------</p>
                  <br />
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=100043475742371"
                    }
                  >
                    Facebook
                  </Link>
                  <Link href={"#"}>Zalo</Link>
                  <Link
                    href={
                      "https://www.instagram.com/quynhu.ic/?fbclid=IwAR35MtSnfx45sphHkT1dd5saMUN1Ppo_hIog46X2Ek-yBOeCwHp4J9eQC2M"
                    }
                  >
                    Instagram
                  </Link>
                  <Link href={"#"}>Website : HAYAKUBOOKS.vn</Link>
                </Stack>
              </SimpleGrid>
            </Container>
            </Box>
        </ChakraProvider>
      </CartProvider>
    </ApolloProvider>
  );
};
export default MyApp;
