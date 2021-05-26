import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  Container,
  SimpleGrid,
  Tag,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Center,
  Grid,
  GridItem,
  Checkbox,
  Heading,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Circle, Image, Badge, chakra, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {useState} from 'react';
export default function TrangChu() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
 const [quantity, setCount] = useState(0);
  return (
    <Box bg={"gray.50"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link
              onClick={(event) => {
                router.push("/trang-chu");
              }}
            >
              <Image
                borderRadius="full"
                boxSize={8}
                src="img/logo1.jpg"
                alt="Segun Adebayo"
              />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>

          <Input ml={324} w={"50%"} placeholder="Tìm kiếm" />

          <Link
            onClick={(event) => {
              router.push("/gio-hang");
            }}
          >
            {" "}
            <Image
              ml={24}
              borderRadius="full"
              boxSize={8}
              src="img/giohang2.png"
              alt="Segun Adebayo"
              onClick={() => setCount({ quantity: quantity + 1 })}
            />
          </Link>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            onClick={(event) => {
              router.push("/dang-nhap");
            }}
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Đăng Nhập
          </Button>
          <Button
            onClick={(event) => {
              router.push("/dang-ky");
            }}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.500"}
            href={"#"}
            _hover={{
              bg: "blue.900",
            }}
          >
            Đăng Ký
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <Grid h="35px" templateRows="repeat(1, 3fr)" gap={4}>
        <GridItem colSpan={1} rowSpan={1} bg="gray.200">
          {" "}
          
        </GridItem>
      </Grid>
      <Container maxW={"container.xl"} py={8}>
        <Grid
          h="1400px"
          templateRows="repeat(3, 3fr)"
          templateColumns="repeat(8, 1fr)"
          gap={6}
          justifyContent={"center"}
        >
          <GridItem colSpan={2} rowSpan={2} bg="white">
            <Box bg="gray.200" w="100%" p={4}>
              <Center>
                <Icon as={HamburgerIcon} />

                <b> Danh Mục Sản Phẩm</b>
              </Center>
            </Box>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Icon as={ChevronRightIcon} />
                      Sách Kĩ Năng
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} ml={14}>
                  <Box className="my-box">
                    <Box
                      as="span"
                      color="black"
                      sx={{
                        ".my-box:hover &": {
                          color: "green.500",
                        },
                      }}
                    >
                      Loại sach1
                    </Box>
                  </Box>
                </AccordionPanel>
                <AccordionPanel pb={4} ml={14}>
                  <Box className="my-box">
                    <Box
                      as="span"
                      color="black"
                      sx={{
                        ".my-box:hover &": {
                          color: "green.500",
                        },
                      }}
                    >
                      Loại sach2
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Icon as={ChevronRightIcon} />
                      Sách Kinh Doanh
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} ml={14}>
                  <Box className="my-box">
                    <Box
                      as="span"
                      color="black"
                      sx={{
                        ".my-box:hover &": {
                          color: "green.500",
                        },
                      }}
                    >
                      Loại sach3
                    </Box>
                  </Box>
                </AccordionPanel>
                <AccordionPanel pb={4} ml={14}>
                  <Box className="my-box">
                    <Box
                      as="span"
                      color="black"
                      sx={{
                        ".my-box:hover &": {
                          color: "green.500",
                        },
                      }}
                    >
                      Loại sach4
                    </Box>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem colSpan={2} rowSpan={1} bg="gray.50">
            <Link
              onClick={(event) => {
                router.push("/sach");
              }}
            >
              {" "}
              <Center py={12}>
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"250px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url(img/sach1.jpg)`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={"220"}
                      width={"280"}
                      objectFit={"cover"}
                      src="img/sach1.jpg"
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Heading
                      fontSize={"xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      Quản Lý Sếp OK Thôi!
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text fontWeight={800} fontSize={"xl"}>
                      ₫57
                      </Text>
                     
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            </Link>
          </GridItem>

          <GridItem colSpan={2} rowSpan={1} bg="gray.50">
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"250px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(img/sach2.jpg)`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={"auto"}
                    width={"auto"}
                    objectFit={"cover"}
                    src="img/sach2.jpg"
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                    Chào Hàng Bán Hàng
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                    ₫57
                    </Text>
                    
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={2} rowSpan={1} bg="gray.59">
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"250px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(img/sach4.jpg)`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={"auto"}
                    width={"auto"}
                    objectFit={"cover"}
                    src="img/sach4.jpg"
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                    Võ Đọa Kinh Doanh 
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                    ₫57
                    </Text>
                   
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>

          <GridItem colSpan={2} rowSpan={1} bg="gray.50">
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"250px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(img/sach9.jpg)`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={"auto"}
                    width={"auto"}
                    objectFit={"cover"}
                    src="img/sach9.jpg"
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                    Câu Hỏi Tăng Trưởng
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                    ₫57
                    </Text>
                   
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={2} rowSpan={1} bg="gray.50">
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"250px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(img/sach10.jpg)`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={"auto"}
                    width={"auto"}
                    objectFit={"cover"}
                    src="img/sach10.jpg"
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                    Thiện Sơn Mộ Tuyết
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                    ₫57
                    </Text>
                  
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>

          <GridItem colSpan={2} rowSpan={1} bg="gray.50">
            <Center py={12}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"250px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 5,
                    left: 0,
                    backgroundImage: `url(img/sach3.jfif)`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={"auto"}
                    width={"auto"}
                    objectFit={"cover"}
                    src="img/sach3.jfif"
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                    Thiện Sơn Mộ Tuyết
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                      đ57
                    </Text>
                   
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </GridItem>
          <GridItem colSpan={2} rowSpan={1} bg="white">
            <Box bg="gray.200" w="100%" p={4}>
              <Center>
                <b>Lọc Sản Phẩm </b>
              </Center>
            </Box>
            <br />
            <p>GIÁ </p>
            <br />
            <Checkbox colorScheme="green"  ml={10}>
              Dưới 100.000đ
            </Checkbox>
            <br />
            <Checkbox colorScheme="green" ml={10}>
              100,000đ - 200,200đ
            </Checkbox>
            <br />
            <Checkbox colorScheme="green" ml={10}>
              200,000đ - 300,000đ
            </Checkbox>
            <br />
            <Checkbox colorScheme="green"  ml={10}>
              Trên 300,000đ
            </Checkbox>
          </GridItem>
        </Grid>
      </Container>
      <Box bg={"gray.500"} color={"white"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <h1>
                <b>HAYAKU BOOKS</b>{" "}
              </h1>
              <p>--------------------</p>
              <br />
              <Link
                href={
                  "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+B%C3%A1ch+Khoa+-+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+%C4%90%C3%A0+N%E1%BA%B5ng/@16.073801,108.149914,14z/data=!4m5!3m4!1s0x0:0x714561e9f3a7292c!8m2!3d16.0738013!4d108.1499142?hl=vi"
                }
              >
                {" "}
                <p>
                  <b>Địa chỉ:</b> 54 Nguyễn Lương Bằng,Liên Chiểu, TP. Đà Nẵng
                </p>
              </Link>

              <p>
                <b>Email: </b> quynhnhuctcn@gmail.com{" "}
              </p>
              <br />
              <p>
                <b>Số điện thoại: </b> 0987654321
              </p>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <h1>
                <b>Hỗ Trợ Khách Hàng</b>
              </h1>
              <p>--------------------</p>
              <br />

              <Link
                onClick={(event) => {
                  router.push("/dieu-khoan-su-dung");
                }}
                href={"#"}
              >
                Điều khoản sử dùng
              </Link>
              <Link
                onClick={(event) => {
                  router.push("/huong-dan-mua-hang");
                }}
                href={"#"}
              >
                Hướng dẫn mua hàng
              </Link>
              <Link href={"#"}>Phương thức thanh toán</Link>
              <Link href={"#"}>Phương thức giao hàng</Link>
              <Link href={"#"}>Chính sách đổi trả</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <h1>
                <b>Thông Tin</b>
              </h1>
              <p>--------------------</p>
              <br />
              <Link href={"#"}>Đăng nhập</Link>
              <Link href={"#"}>Đăng ký</Link>
              <Link href={"#"}>Tra cứu đơn hàng</Link>
              <Link href={"#"}>Giới thiệu HAYAKU BOOKS</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <h1>
                <b>Mạng Xã Hội</b>
              </h1>
              <p>--------------------</p>
              <br />
              <Link
                href={"https://www.facebook.com/profile.php?id=100043475742371"}
              >
                Facebook
              </Link>
              <Link href={"#"}>Zalo</Link>
              <Link
                href={
                  "https://www.instagram.com/quynhu.ic/?fbclid=IwAR35MtSnfx45sphHkT1dd5saMUN1Ppo_hIog46X2Ek-yBOeCwHp4J9eQC2M"
                }
              >
                Instagram
              </Link>
              <Link href={"#"}>Website : HAYAKUBOOKS.vn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box py={10} bg={"gray.500"} color={"white"}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image
            borderRadius="full"
            boxSize={24}
            src="img/logo1.jpg"
            alt="Segun Adebayo"
          />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2021 HAYAKUBOOKS - Thế Giới Sách !
        </Text>
      </Box>
    </Box>
  );
}
const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={useColorModeValue("gray.600", "gray.200")}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={useColorModeValue("white", "gray.800")}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const NAV_ITEMS = [
  {
    label: "Danh Mục Sách",
    children: [
      {
        label: "Sách Kĩ Năng",
        href: "#",
      },
      {
        label: "Sách Kinh Doanh",
        href: "#",
      },
      {
        label: "Sách Kinh Doanh2",
        href: "#",
      },
      {
        label: "Sách Kinh Doan3",
        href: "#",
      },
    ],
  },
  // {
  //   label: "Find Work",
  //   children: [
  //     {
  //       label: "Job Board",
  //       subLabel: "Find your dream design job",
  //       href: "#",
  //     },
  //     {
  //       label: "Freelance Projects",
  //       subLabel: "An exclusive list for contract work",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Learn Design",
  //   href: "#",
  // },
];
const ListHeader = () => {
  return <Text fontWeight={"500"} fontSize={"lg"} mb={2}></Text>;
};
