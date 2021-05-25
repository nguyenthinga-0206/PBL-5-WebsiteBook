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

export default function DangNhap() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
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
              <Link color={'blue.500'} textAlign={'end'} ml={'auto'}>Quên mật khẩu </Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
             Đăng Nhập
            </Button>
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