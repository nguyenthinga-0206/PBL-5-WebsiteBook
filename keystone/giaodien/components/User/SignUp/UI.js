import {
  Box,
  Stack,
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  CheckIcon,
  PinInputField,
  PinInput,
  Button,
  Heading,
  Text,
  Link,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UI({ handleChange, onSignUp, notification }) {

  const router = useRouter();

  const [value, setValue] = useState();

  return (
    <Stack
      bg={'gray.50'}
      rounded={'xl'}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: 'lg' }}>
      <Stack spacing={4}>
        <Heading
          color={'gray.800'}
          lineHeight={1.1}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
          Đăng Ký Thành Viên
          <Text
            as={'span'}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text">
            !
          </Text>
        </Heading>
      </Stack>
      <Box as={'form'} mt={10}>
        <Stack spacing={4}>
          <b>Email:</b>
          <InputGroup>
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
            {/* <InputRightElement
              children={
                <Link
                  color="blue.500"
                  children="Gửi OTP
                  onClick={(e) => {
                    // router.push("/gui-email-xac-nhan")
                  }}
                />
              }
            /> */}
          </InputGroup>
          {/* <b>Mã xác nhận:</b>
          <Center>
            <HStack otp >
              <PinInput size="md">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center> */}
          <b>Tên Đăng Nhập:</b>
          <Input
            placeholder="abc1234"
            name={'name'}
            onChange={handleChange('name')}
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
          <b>Nhập mật Khẩu:</b>
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
          fontFamily={'heading'}
          onClick={(e) => {
            onSignUp;
            router.push("/dang-nhap");
          }}
          mt={8}
          w={'full'}
          bgGradient="linear(to-r, blue.500,blue.200)"
          color={'white'}
          _hover={{
            bgGradient: 'linear(to-r, green.500,green.200)',
            boxShadow: 'xl',
          }}>
          Đăng Ký
          </Button>
      </Box>
      form
    </Stack>
  );
}

