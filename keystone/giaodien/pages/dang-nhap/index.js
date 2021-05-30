// import {
//     Button,
//     Checkbox,
//     Flex,
//     FormControl,
//     FormLabel,
//     Heading,
//     Input,
//     Link,
//     Stack,
//     Image,
//     Container,
//   } from '@chakra-ui/react';
//   import UserSigIn from "../../components/User/SignIn";
//   import { useRouter } from "next/router";
//   import { useState } from "react";
  
//   export default function DangNhap() {
//     // console.log(user);
//     // const router = useRouter();

//     // const [values, setValues] = useState({
//     //   email: null,
//     //   password: null,
//     // });
//     // /**
//     //  * @param {String} name
//     //  */
//     // const handleChange = (name) => (e) => {
//     //   setValues({ ...values, [name]: e.target.value });
//     // };
//     // console.log(values);

//     // <UserList where = {email_contains}/>
    

//     return (
//       <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
//         <UserSigIn />
//         <Flex flex={2}>
//           <Image
//             alt={'Login Image'}
//             objectFit={'cover'}
//             src={""}
//           />
//         </Flex>
//       </Stack>
//     );
//   }
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
} from '@chakra-ui/react';
import { useRouter } from "next/router";

export default function DangNhap() {
  const router = useRouter();
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg={"white"}>
      <Flex p={8} flex={2} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'} md={450}><h1>Đăng Nhập  HAYAKUBOOKS </h1></Heading>
          <FormControl id="email">
              <br/>
              
            <FormLabel md={450}>Tên tài khoản</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Mật khẩu</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'end'}
              justify={'end'}>
              <Link color={'blue.500'} textAlign={'end'} ml={'auto'}
              onClick={(e) => {
                router.push("/quen-mk");
              }}
                >Quên mật khẩu </Link>
            </Stack>

            <Link
            onClick={(e) => {
              router.push("/");
            }}
          >
            <Button colorScheme={'blue'} variant={'solid'}
            >
             Đăng Nhập
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={2}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'img/biasach.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}