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
  Heading,
  Grid,
  GridItem,
  useNumberInput,
  HStack,
  List,
  Center,
  Portal,
  Editable,
  Select,
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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
  CheckCircleIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Divider } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

import {
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
export default function TrangChu() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 100,
    precision: 2,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });
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
            <Image
              borderRadius="full"
              boxSize={8}
              src="img/logo1.jpg"
                            alt="Segun Adebayo"
            />
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
          <Link
            onClick={(event) => {
              router.push("/gio-hang");
            }}
          >
            <Image
              ml={50}
              borderRadius="full"
              boxSize={8}
              src="img/giohang2.png"
              alt="Segun Adebayo"
            />
          </Link>
        
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            onClick={(event) => {
              router.push("/trang-chu");
            }}
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            ml={500}
          >
            Quay Lại Trang Chủ
          </Button>
         
        </Stack>
    
        </Flex>   
      </Flex>
      

      <Box bg={"gray.50"} color={"black"}>
        <Container maxW={"container.xl"} bg="white" py={10}>
          <Grid
            h="800px"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={3} colSpan={1} bg="white">
              <GridItem rowSpan={2} colSpan={1} bg="white">
                <b>
                  {" "}
                  <i> Thông tin nhận hàng</i>
                </b>

                <br />
                <br />
                <Input placeholder="Họ Tên" size="md" />

                <br />
                <br />

                <Input placeholder="Số Điện Thoại" size="md" />

                <br />
                <br />
                <Input placeholder="Tỉnh Thành" size="md" />

                <br />
                <br />
                <Input placeholder="Quận/Huyện" size="md" />

                <br />
                <br />
                <Input placeholder="Phường/Xã" size="md" />

                <br />
                <br />
                <Input placeholder="Địa Chỉ " size="md" />

                <br />
                <br />
                <Input placeholder="Ghi Chú" size="md" />

                <br />
                <br />
              </GridItem>
            </GridItem>
            <GridItem rowSpan={3} colSpan={1} bg="white">
              <Container maxW={"container.xl"} py={10}>
                <Grid
                  h="800px"
                  templateRows="repeat(6, 1fr)"
                  templateColumns="repeat(1, 1fr)"
                  gap={4}
                >
                  <GridItem rowSpan={2} colSpan={1} bg="white">
                    <b>
                      <i>Vận Chuyển</i>
                    </b>
                    <br></br>
                    <br></br>
                    <Box borderWidth={2} bg={"white"}>
                      <Container maxW={"container.xl"} py={3}>
                        🚚 Đồng giá ship 30.000đ toàn quốc.
                      </Container>
                    </Box>
                    <br />
                    <br />{" "}
                    <b>
                      <i>Thanh toán</i>
                    </b>
                    <br></br>
                    <br></br>
                    <Box borderWidth={2} bg={"white"}>
                      <Container maxW={"container.xl"} py={3}>
                        <p color="yellow.700">
                          {" "}
                          📦 Thanh toán khi nhận hàng (COD)
                          <br/>
                          <br/>
                          <hr />
                        </p>
                        Bạn chỉ phải thanh toán khi nhận hàng. Thời gian giao
                        hàng dự kiến từ 2-3 ngày.
                      </Container>
                    </Box>
                    <br></br>
                    <br></br>
                    <Popover>
                      <PopoverTrigger>
                        <Button>🏦 Chuyển khoản ngân hàng</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>chào bạn!</PopoverHeader>
                        <PopoverBody>
                          <p>
                            #VIETCOMBANK Số TK: 123456789 <br />
                            Chủ TK : Phạm Thị Quỳnh Như
                            <br />
                            BẠN VUI LÒNG GHI RÕ NỘI DUNG
                            <br /> CHUYỂN KHOẢN: Tên sách - SDT đặt hàng để khi
                            nhận được thông báo
                            <br />
                            chuyển khoản HAYAKU_BOOK sẽ gửi hàng cho ban liền
                            nha ^^
                          </p>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <br />
                  </GridItem>
                </Grid>
              </Container>
            </GridItem>

            <GridItem rowSpan={3} colSpan={1} bg="white">
              <b>
                <i>Sảm phẩm</i>
              </b>
              <br />
              <br />
              <Box borderWidth={2} bg={"white"}>
                <Container maxW={"container.xl"} py={6} ml={14}>
                  <Grid
                    h="400px"
                    w="100%"
                    templateRows="repeat(7, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={4}
                  >
                    <GridItem rowSpan={2} colSpan={1} >
                      <Image
                        src="img/sach2.jpg"
                        width="100"
                        height="100"
                      ></Image>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={1} >
                      <br />
                      <br />
                      <p>60,000đ</p>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} >
                      <p>Tổng tiền hàng :</p>
                      <p>Vận chuyển :</p>
                      <hr></hr>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} >
                      <p>
                        60,000đ <br />
                        30,000đ
                      </p>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1}>
                      <br />
                      <p>Tổng số tiền :</p>
                      <hr></hr>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={1} >
                      <br />
                      <p>90,000đ</p>
                    </GridItem>
                  </Grid>
                </Container>
              </Box>

              <GridItem rowSpan={1} colSpan={3} bg="white">
                <Box>
                  <Button
                    onClick={(event) => {
                      router.push("/gio-hang");
                    }}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={50}
                    color={"black"}
                    bg={"white"}
                    href={"#"}
                    _hover={{
                      bg: "gray.600",
                    }}
                  >
                    Quay Lại Giỏ Hàng
                  </Button>
                </Box>
                <GridItem rowSpan={1} colSpan={3} bg="white" ml={380}>
                  <Box>
                    <Button
                      onClick={(event) => {
                        router.push("/chi-tiet-don-hang");
                      }}
                      display={{ base: "none", md: "inline-flex" }}
                      fontSize={"sm"}
                      fontWeight={50}
                      color={"white"}
                      bg={"orange.500"}
                      href={"#"}
                      _hover={{
                        bg: "teal.600",
                      }}
                    >
                      Đặt hàng
                    </Button>
                  </Box>
                </GridItem>
              </GridItem>
            </GridItem>
          </Grid>
        </Container>
      </Box>
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
  
  {
    label: <b> HAYAKU _ BOOOS RẤT HÂN HẠNH ĐƯỢC PHỤC VỤ BẠN !</b>,
    href: "#",
  },
];
const ListHeader = () => {
  return <Text fontWeight={"500"} fontSize={"lg"} mb={2}></Text>;
};