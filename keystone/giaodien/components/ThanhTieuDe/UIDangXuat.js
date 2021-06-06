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
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UI({ onSignOut }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

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
                alt="Segun Adebayo"
              />
            </Text>
          </Link>
        </Flex>
        <Input
          // ml={10}
          // mg = {200}
          // md=  {200}
          mr="20px"
          w={"50%"}
          bg="white"
          placeholder="Tìm kiếm"
        />

        <Stack
          flex={{ base: 1, md: 0 }}
          // justify={"flex-end"}
          direction={"row"}
          spacing={35}
          mr="30px"
        >
          <Link
            onClick={(e) => {
              router.push("/gio-hang");
            }}
          >
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.50", "white")}
            >
              <Image w={"440px"} src="img/gio1.png" alt="Segun Adebayo" />
            </Text>
          </Link>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"x-small"}
            w={"100%"}
            fontWeight={600}
            onClick={onSignOut}
            color={"white"}
            bg={"green.300"}
            href={"#"}
            _hover={{
              bg: "#1C4532",
            }}
          >
            Đăng Xuất
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
