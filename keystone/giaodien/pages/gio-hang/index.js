import {
  Box,
  Flex,
  Text,
  Textarea,
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
  Divider,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Grid,
  GridItem,
  useNumberInput,
  Image,
  Input,
  Center,
  Portal,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
export default function GioHang({id, tenSach,}) {
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
    <Box bg={"gray.500"}>
      <Box bg={"gray.50"} color={"black"}>
        <Container maxW={"container.xl"} bg="white" py={10}>
          <Grid
            h="400px"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={10} bg="white">
              <Heading size="lg" ml={14}>
                <i>Giỏ Hàng</i>
              </Heading>
              <br />
              <hr />
              <br />
              <hr />
              <br />
              <hr></hr>
            </GridItem>
            <GridItem rowSpan={1} colSpan={10} bg="white">
              <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(10, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Center mb={20}></Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center mb={20}>Sản phẩm</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>giá</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>Số lượng </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>Tổng</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center>Xóa</Center>
                </GridItem>
              </Grid>
              <hr></hr>
            </GridItem>

            <GridItem rowSpan={1} colSpan={10} bg="white">
              <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(10, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Center mb={20}>
                    <Image src="img/sach2.jpg" width="53" height="50"></Image>
                  </Center>
                </GridItem>

                <GridItem rowSpan={1} colSpan={2}>
                  <Center mb={20}>{tenSach}</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>199.000đ</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>5</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>567,000đ</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center>
                    <Button bg={"white"}>
                      <Popover>
                        <PopoverTrigger>
                          <Button>
                            {" "}
                            <Icon as={SmallCloseIcon}></Icon>
                          </Button>
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>
                              Bạn có chắc chắn muốn xóa Sản Phẩm không?
                            </PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverFooter>
                              <Button bg="gray.500" color="black">
                                No
                              </Button>
                            </PopoverFooter>

                            <PopoverBody>
                              <Button bg="gray.500" color="black">
                                Yes
                              </Button>
                            </PopoverBody>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    </Button>
                  </Center>
                </GridItem>
              </Grid>
              <hr></hr>
            </GridItem>

            <GridItem rowSpan={1} colSpan={10} bg="white">
              <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(10, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Center mb={20}>
                    <Image src="img/sach2.jpg" width="53" height="50"></Image>
                  </Center>
                </GridItem>

                <GridItem rowSpan={1} colSpan={2}>
                  <Center mb={20}>Vui học tiếng anh</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>199.000đ</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>5</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>567,000đ</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center>
                    <Button bg={"white"}>
                      <Popover>
                        <PopoverTrigger>
                          <Button>
                            {" "}
                            <Icon as={SmallCloseIcon}></Icon>
                          </Button>
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>
                              Bạn có chắc chắn muốn xóa Sản Phẩm không?
                            </PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverFooter>
                              <Button bg="gray.500" color="black">
                                No
                              </Button>
                            </PopoverFooter>

                            <PopoverBody>
                              <Button bg="gray.500" color="black">
                                Yes
                              </Button>
                            </PopoverBody>
                          </PopoverContent>
                        </Portal>
                      </Popover>
                    </Button>
                  </Center>
                </GridItem>
              </Grid>
              <hr></hr>
            </GridItem>

            <GridItem rowSpan={2} colSpan={10} bg="white">
              <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(10, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={1} colSpan={5} bg="white">
                  <b>Tổng tiền : </b> 456,000đ
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} bg="white">
                  <Box>
                    <Button
                      onClick={(event) => {
                        router.push("/trang-chu");
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
                      Tiếp tục mua sắm
                    </Button>
                  </Box>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2} bg="white">
                  <Box>
                    <Button
                      onClick={(event) => {
                        router.push("/thanh-toan");
                      }}
                      display={{ base: "none", md: "inline-flex" }}
                      fontSize={"sm"}
                      fontWeight={50}
                      color={"white"}
                      bg={"teal.600"}
                      href={"#"}
                      _hover={{
                        bg: "orange.500",
                      }}
                    >
                      Thanh toán
                    </Button>
                  </Box>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Container>
      </Box>
     </Box>
  );
}