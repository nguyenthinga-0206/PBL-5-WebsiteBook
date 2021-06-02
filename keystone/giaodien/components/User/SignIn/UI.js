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
  import { useRouter } from "next/router";
  import { useState } from "react";
  
  export default function UI({onSignIn, handleChange}) {
    return (
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
                  router.push("/quen-mk")
                }}
              >
                Quên mật khẩu 
              </Link>
            </Stack>
            <Button 
              colorScheme={'blue'} 
              variant={'solid'}
              onClick = {onSignIn}
            >
              Đăng Nhập
            </Button>
          </Stack>
        </Stack>
      </Flex>      
    );
  }
