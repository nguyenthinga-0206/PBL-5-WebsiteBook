import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Image,
  useColorModeValue,
  Box,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function QuenMatKhau() {
  const router = useRouter();
  return (
    
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
         <GridItem  colSpan={2} bg="white" >
        <Flex
        
        align={"center"}
        justify={'center'}
         py={12}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          boxShadow={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          p={10}
          spacing={8}
          align={"center"}
        >
          <Image w={"50%"} h={"50%"} src="/img/mail1.png" alt="Segun Adebayo" />
          <Stack align={"center"} spacing={2}>
            <Heading
              textTransform={"uppercase"}
              fontSize={"xl"}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              Đặt Lại Mật Khẩu
            </Heading>
            <Text fontSize={"lg"} color={"gray.500"}>
              Hãy nhập Email để lấy mã xác nhận
            </Text>
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            w={"full"}
          >
            <Input
              type={"text"}
              placeholder={"name@gmail.com"}
              color={useColorModeValue("gray.800", "gray.200")}
              bg={useColorModeValue("gray.100", "gray.600")}
              rounded={"full"}
              border={0}
              _focus={{
                bg: useColorModeValue("gray.200", "gray.800"),
                outline: "none",
              }}
            />
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              flex={"1 0 auto"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
             
            >
              Tiếp tục  
            </Button>
          </Stack>
        </Stack>
      </Flex>    
            </GridItem>

            <GridItem  colSpan={2} bg="white" >
        <Flex
        
        align={"center"}
        justify={'center'}
         py={12}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          boxShadow={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          p={10}
          spacing={8}
          align={"center"}
        >
          <Image w={"30%"} h={"30%"} src="/img/mail2.png" alt="Segun Adebayo" />
          <Stack align={"center"} spacing={2}>
            <Heading
              textTransform={"uppercase"}
              fontSize={"xl"}
              color={useColorModeValue("gray.800", "gray.200")}
            >
             Vui Lòng Nhập Mã Xác Minh
            </Heading>
            <Text fontSize={"lg"} color={"gray.500"}>
            Mã xác minh sẽ được gửi tới gmail của bạn
            </Text>
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            w={"full"}
          >
            <Input
              type={"text"}
              placeholder={"mã xác minh"}
              color={useColorModeValue("gray.800", "gray.200")}
              bg={useColorModeValue("gray.100", "gray.600")}
              rounded={"full"}
              border={0}
              _focus={{
                bg: useColorModeValue("gray.200", "gray.800"),
                outline: "none",
              }}
            />
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              flex={"1 0 auto"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
            >
              Tiếp tục
            </Button>
          </Stack>
        </Stack>
      </Flex>
   
            </GridItem>
     
            <GridItem  colSpan={2} bg="white" >
        <Flex
        
        align={"center"}
        justify={'center'}
         py={12}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          boxShadow={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          p={10}
          spacing={8}
          align={"center"}
        >
          <Image w={"20%"} h={"30%"} src="/img/khoa1.png" alt="Segun Adebayo" />
          <Stack align={"center"} spacing={2}>
            <Heading
              textTransform={"uppercase"}
              fontSize={"xl"}
              color={useColorModeValue("gray.800", "gray.200")}
            >
              Thiết Lập Mật Khẩu
            </Heading>
           
          </Stack>
          <Stack
            spacing={4}
            direction={{ base: "column", md: "row" }}
            w={"full"}
          >
            <Input
              type={"text"}
              placeholder={"mật khẩu mới"}
              color={useColorModeValue("gray.800", "gray.200")}
              bg={useColorModeValue("gray.100", "gray.600")}
              rounded={"full"}
              border={0}
              _focus={{
                bg: useColorModeValue("gray.200", "gray.800"),
                outline: "none",
              }}
            />
             <Input
              type={"text"}
              placeholder={"nhập lại mật khẩu mới"}
              color={useColorModeValue("gray.800", "gray.200")}
              bg={useColorModeValue("gray.100", "gray.600")}
              rounded={"full"}
              border={0}
              _focus={{
                bg: useColorModeValue("gray.200", "gray.800"),
                outline: "none",
              }}
            />
            <Button
             onClick={(e) => {
                router.push("/dang-nhap");
              }}
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              flex={"1 0 auto"}
              _hover={{ bg: "blue.500" }}
              _focus={{ bg: "blue.500" }}
            >
              Đăng Nhập
            </Button>
          </Stack>
        </Stack>
      </Flex>
   
            </GridItem>
     
      </Grid>
      
  );
}
