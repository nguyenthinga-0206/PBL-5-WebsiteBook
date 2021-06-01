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
} from '@chakra-ui/react';
import UserSigIn from "../../components/User/SignIn";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DangNhap() {
  // console.log(user);
  // const router = useRouter();

  // const [values, setValues] = useState({
  //   email: null,
  //   password: null,
  // });
  // /**
  //  * @param {String} name
  //  */
  // const handleChange = (name) => (e) => {
  //   setValues({ ...values, [name]: e.target.value });
  // };
  // console.log(values);

  // <UserList where = {email_contains}/>
  

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <UserSigIn />
      <Flex flex={2}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={""}
        />
      </Flex>
    </Stack>
  );
}