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
        borderStyle={"solid"}
        align={"center"}
      >
          <Link
            onClick={(e) => {
              router.push("/");
            }}
          >
            <Text
              // textAlign={useBreakpointValue({ base: "center" })}
              // fontFamily={"heading"}
              color={useColorModeValue("gray.50", "white")}
            >
              <Image
                w={"50%"}
                h={"50%"}
                src="img/logo.png"
                alt="Trang Chủ"
              />
            </Text>
          </Link>
        <Input
          // mr="80px"
          w={"70%"}
          bg="white"
          mr="50px"
          onChange={change}
          placeholder="Tìm kiếm"
        />

        {/* <Stack
          flex={{ base: 1, md: 0 }}
          direction={"row"}
          spacing={35}
          mr="30px"
        > */}
          <Link
            onClick={(e) => {
              router.push({
                pathname: "/gio-hang",
                query: { value: value }
              });
            }}
          >
            <Text
              mr="40px"
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.50", "white")}
            >
              <Image
                w={"100px"}
                // h={"60px"}
                src="img/gio1.png"
                alt="Giỏ Hàng"
              />
            </Text>
          </Link>
          <Text 
              mr="30px"
              color="blackAlpha.700"
              pointerEvents="stroke"
     >
       <b><i>Xin Chào</i>   </b>  <i>{data?.name}</i>
          </Text>
          <Text 

              textAlign={useBreakpointValue({ base: "center" , })}
            //   fontFamily={"heading"}
            //   color={useColorModeValue("gray.50", "white")}
            >
          {value ? <DangXuat UI={DangXuatUI} /> : <DangNhapUI />}
          </Text>
          
        {/* </Stack> */}
      </Flex>
    </Box >

  );
}
