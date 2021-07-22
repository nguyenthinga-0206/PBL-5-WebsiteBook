import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Image,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Drawer,
  color,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import DangXuat from "../User/SignOut";
import DangXuatUI from "../User/SignOut/UI";
import DangNhapUI from "../User/SignIn/ButtonSignIn";

export default function UI({ change, value, data }) {
  const router = useRouter();
  // console.log(value);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#b8ddd1", "white")}
        color={useColorModeValue("gray.800", "white")}
        minH={"60px"}
        px={{ base: 4 }}
        // borderBottom={1}
        borderStyle={"solid"}
        // borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link
            onClick={(e) => {
              router.push("/");
            }}
          >
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.50", "white")}
            >
              <Image
                w={"50%"}
                h={"50%"}
                src="img/logo.png"
                alt="quay lại trang chủ"
              />
            </Text>
          </Link>
        </Flex>
        <Input
          mr="80px"
          w={"50%"}
          bg="white"
          mr="30px"
          onChange={change}
          placeholder="Tìm kiếm"
        />

        <Stack
          flex={{ base: 1, md: 0 }}
          direction={"row"}
          spacing={35}
          mr="30px"
        >
          <Link
            onClick={(e) => {
              router.push({
                pathname: "/gio-hang",
                query: { value: value }
              });
            }}
          >
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.50", "white")}
            >
              <Image
                w={"440px"}
                src="img/gio1.png"
                alt="Giỏ hàng"
              />
            </Text>
          </Link>
          <b>HayakuBook xin chao {data?.name}</b>
          {value ? <DangXuat UI={DangXuatUI} /> : <DangNhapUI />}
        </Stack>
      </Flex>
    </Box >

  );
}
