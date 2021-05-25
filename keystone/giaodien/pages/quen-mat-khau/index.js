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
  import { useState } from "react";
  
  export default function QuenMatKhau() {
  
    const router = useRouter();

    const [value, setValues] = useState();

    const handleChange = (e) => {
    setValues({ value: e.target.value });
    };
    console.log(value);
  
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
            Quên Mật Khẩu
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
            
            <b>Nhập Email để lấy lại tài khoản:</b>
            <Input
              placeholder="Email"
              name = {'email'} 
              onChange={handleChange}
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
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, blue.500,blue.200)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, green.500,green.200)',
                boxShadow: 'xl',
              }}>
              Tiếp tục
            </Button>
          </Link>
        </Box>
        form
      </Stack>
    );
  }
  
    