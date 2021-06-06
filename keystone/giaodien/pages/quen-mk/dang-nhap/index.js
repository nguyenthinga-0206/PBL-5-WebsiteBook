import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Container,
} from "@chakra-ui/react";
import UserSigIn from "../../components/User/SignIn";
import UserSigInUI from "../../components/User/SignIn/UI";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DangNhap() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bg={"white"}
    >
      <UserSigIn UI={UserSigInUI} />
      <Flex flex={2}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"img/biasach.jpg"}
        />
      </Flex>
    </Stack>
  );
}
