import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  Input,
  Container,
  Spacer,
  Center,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DangXuat from "../User/SignOut";
import DangXuatUI from "../User/SignOut/UI";
import DangNhapUI from "../User/SignIn/ButtonSignIn";
import PhanloaisachList from "../Phanloaisach/List";
import PhanloaisachListMenu from "../Phanloaisach/List/Menu";
export default function UI({ change, value, data }) {
  const router = useRouter();

  return (
    <Box shadow="lg" bg="green.500" pos="sticky" top={0} zIndex={10}>
      <Container maxW="container.lg" py={2}>
        <Flex gridGap={4}>
          <Center>
            <NextLink href="/" passHref>
              <Link>
                <Image h={50} src="/img/logo.png" alt="Segun Adebayo" />
              </Link>
            </NextLink>
          </Center>
          {/* <Center>
            <PhanloaisachList UI={PhanloaisachListMenu} />
          </Center> */}
          <Spacer />

          <Center>
            <Input
              size="sm"
              rounded="md"
              w={300}
              onChange={change}
              placeholder="Tìm kiếm"
              colorScheme="white"
              bg="white"
            />
          </Center>

          <Center>
            <Link
              onClick={(e) => {
                router.push({
                  pathname: "/gio-hang",
                  query: { value: value },
                });
              }}
            >
              <IconButton isRound size="sm" icon={<AiOutlineShoppingCart />} />
            </Link>
          </Center>
          {value && (
            <Center>
              <Text>Xin Chào {data?.name}</Text>
            </Center>
          )}
          <Center>
            {value ? <DangXuat UI={DangXuatUI} /> : <DangNhapUI />}
          </Center>
        </Flex>
      </Container>
    </Box>
  );
}
