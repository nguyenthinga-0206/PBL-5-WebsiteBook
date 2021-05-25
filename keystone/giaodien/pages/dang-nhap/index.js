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
  import UserList from "../../components/User/List";
  import { useRouter } from "next/router";
  import { useState } from "react";
  
  export default function DangNhap({ user }) {
    console.log(user);
    const router = useRouter();

    const [values, setValues] = useState({
      email: null,
      password: null,
    });
    /**
     * @param {String} name
     */
    const handleChange = (name) => (e) => {
      setValues({ ...values, [name]: e.target.value });
    };
    console.log(values);

    
    

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={2} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'} md={450}><h1>Đăng Nhập_HAYAKUBOOKS </h1></Heading>
            <b>Email:</b>
          <Input
            placeholder="Email"
            name = {'email'} 
            onChange={handleChange("email")}
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <b>Mật Khẩu:</b>
          <Input
            placeholder="Mật Khẩu"
            name = {'password'}
            onChange={handleChange("password")}
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'end'}
                justify={'end'}>
                <Link 
                  color={'blue.500'} 
                  textAlign={'end'} ml={'auto'}
                  onClick = { (e) => {
                    router.push("/quen-mat-khau")
                  }}
                >
                  Quên mật khẩu 
                </Link>
              </Stack>
              <Button 
                colorScheme={'blue'} 
                variant={'solid'}
                onClick = { (e) => {
                  router.push("/")
                }}
              >
               Đăng Nhập
              </Button>
            </Stack>
          </Stack>
        </Flex>
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