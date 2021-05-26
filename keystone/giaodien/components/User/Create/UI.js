import {
  Box,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import HTML from "../../HTML";

export default function UI({ handleChange, onCreate, resultCreateUser }) {

  const router = useRouter();

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
          <b>Tên Đăng Nhập:</b>
          <Input
            placeholder="Tên Đăng Nhập"
            name = {'name'}
            onChange={handleChange('name')}
            bg={'gray.100'}
            border={0}
            color={'gray.500'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
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
        </Stack>
        <Link
          onClick = {(e) => {
            router.push("dang-nhap");
          }}
        >
          <Button
            fontFamily={'heading'}
            onClick={onCreate}
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
        </Link>
        {resultCreateUser?.error && HTML.generation(resultCreateUser.error, 4)}
      </Box>
      form
    </Stack>
  );
}

  