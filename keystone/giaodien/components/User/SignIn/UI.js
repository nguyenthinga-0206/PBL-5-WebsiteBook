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
  Center,
} from '@chakra-ui/react';
import { useRouter } from "next/router";
import { useState } from "react";

export default function UI({ onSignIn, handleChange, notification }) {
  const router = useRouter();

  return (
    <Flex p={8} flex={2} align={'center'} justify={'center'}>
      <Stack spacing={4} w={'full'} maxW={'md'}>
        <Heading fontSize={'2xl'} md={450}><h1>Đăng Nhập_HAYAKUBOOKS </h1></Heading>
        <b>Email:</b>
        <Input
          placeholder="abc1234@gmail.com"
          name={'email'}
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
          placeholder="********"
          name={'password'}
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
              onClick={(e) => {
                router.push("/quen-mk")
              }}
            >
              Quên mật khẩu
            </Link>
          </Stack>
          <p
            style={{
              padding: 5,
              backgroundColor: notification.color,
              textAlign: "center",
            }}
          >
            {notification.content}
          </p>
          <Button
            colorScheme={'blue'}
            variant={'solid'}
            onClick={onSignIn}
          >
            Đăng Nhập
          </Button>
          <Center>
            <Link
              onClick={(e) => {
                router.push("/dang-ky");
              }}
              color="blue.600"
            > Nếu chưa có tài khoản thì đăng ký tại đây!
            </Link>
          </Center>
        </Stack>
      </Stack>
    </Flex>
  );
}