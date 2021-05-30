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
  useDisclosure,
  Container,
  SimpleGrid,
  Tag,
  PopoverContent,
  Grid,
  GridItem,
  useNumberInput,
  Input,
} from "@chakra-ui/react";
import {
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DonHangItem from "../../components/DonHang/Item";

export default function ThanhToan() {

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
              <DonHangItem />
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
    </Box>
  );
}

