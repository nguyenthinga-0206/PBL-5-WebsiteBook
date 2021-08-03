import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function UI() {
  const router = useRouter();
  return (
    <Box
      bg={useColorModeValue('#b8ddd1', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10} fontSize={'small'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>HAYAKU BOOKS</ListHeader>
            <Link href={'#'}>----------------</Link>
            <Link href={'#'}><b>Địa chỉ:</b> 54 Nguyễn Lương Bằng, Liên Chiểu, TP.Đà Nẵng</Link>
            <Link href={'#'}><b>Email:</b> hayakubooks@gmail.com</Link>
            <Link href={'#'}><b>Số điện thoại:</b> 1234554321</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Hỗ Trợ Khách Hàng</ListHeader>
            <Link href={'#'}>----------------</Link>
            <Link href={'http://localhost:3000/dieu-khoan-su-dung'}>Điều khoản sử dùng</Link>
            <Link href={'http://localhost:3000/huong-dan-mua-hang'}>Hướng dẫn mua hàng</Link>
            <Link href={'#'}>Phương thức thanh toán</Link>
            <Link href={'#'}>Phương thức giao hàng </Link>
            <Link href={'#'}>Chính sách đổi trả</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Thông Tin</ListHeader>
            <Link href={'#'}>----------------</Link>
            <Link href={'#'}>Đăng nhập</Link>
            <Link href={'#'}>Đăng ký</Link>
            <Link href={'#'}>Tra cứu đơn hàng</Link>
            <Link href={'#'}>Giới thiệu HAYAKUBOOKS</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Mạng Xã Hội </ListHeader>
            <Link href={'#'}>----------------</Link>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Zalo</Link>
            <Link href={'#'}>Website:hayakubook.vn</Link>
            
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
         
          <Link
            onClick = { (e) => {
              router.push("/");
            }}
          >
               <Image 
               w={'150'}
               h={'150'}
                src="/img/logo.png"     
                           alt="Segun Adebayo"
              />
          </Link>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'} fontSize={'x-small'}>
          © 2021 HAYAKUBOOKS CẢM ƠN QUÝ KHÁCH HÀNG!
        </Text>
      </Box>
    </Box>
  );
}