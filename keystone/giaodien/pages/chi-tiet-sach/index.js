import {
  Box,
  Text,
  Stack,
  Icon,
  Container,
  Heading,
  Grid,
  GridItem,
  useNumberInput,
  HStack,
  Image,
  Tabs,
  TabList,
  TabPanels, 
  Tab, 
  TabPanel,
  Input,
  Divider,
  Textarea,
  Button,
  Center,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ChiTietSach({
  id, tenSach, tenTacGia, tenNhaXuatBan, ngayXuatBan, 
  soLuong, gia, soTrang, 
  IMG1, IMG2, IMG3, IMG4, IMG5,
  tieude, baiViet, loai
}) {

  const router = useRouter();

  // Thay đôi so luong mua hang
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: soLuong,
    precision: 2,
  });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  // Trang thai còn hàng hay hết hàng
  // const [status, setStatus] = useState(parseInt(soLuong));
  // const click = () => {
  //   if(status > 0 ) return setStatus(status - parseInt(input.value));
  //   else return setStatus("Đã hết hàng");
  // };

  return (
    <Box bg={"gray.50"}>
      <Container maxW={"container.xl"} py={8}>
        <Grid
          h="800px"
          templateRows="repeat(10, 1fr)"
          templateColumns="repeat(10, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={8} colSpan={5} bg="white">
            <Image src={IMG1} alt="Segun Adebayo" w="100%" h="100%" />
          </GridItem>
          <GridItem rowSpan={10} colSpan={5} bg="white">
            <GridItem rowSpan={5} colSpan={5} bg="white">
              <Box ml={14}>
                <Heading as="h2" size="xl" md={14} ml={14}>
                  {tenSach}
                </Heading>
                <br />
                <hr></hr>
                <br />
                <p>
                  <b>
                    <i>Mã sản phẩm:</i>
                  </b>{" "}
                  <i> {id}</i>
                </p>
                <br />
                <b>Tác giả: </b>{tenTacGia}<br/>
                <b>NXB: </b>{tenNhaXuatBan}<br/>
                <b>Năm xuất bản: </b>{ngayXuatBan}<br/>
                <b>Số trang: </b>{soTrang}<br/>
                <hr />
                <br></br>            
              </Box>
            </GridItem>
            <GridItem rowSpan={5} colSpan={5} bg="white">
              <GridItem rowSpan={3} colSpan={5} bg="white">
                <GridItem rowSpan={2} colSpan={5} bg="white">
                  <Grid
                    h="200px"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={4}
                  >
                    <GridItem rowSpan={1} bg="white">
                      <Box ml={14}>
                        <p>
                          <p>
                            <b>Giá:</b>{" "}
                            <Text fontSize="xl" ml={30} color={"green.600"}>
                              {" "}
                              {new Intl.NumberFormat().format(gia)}đ
                            </Text>{" "}
                          </p>
                          <br />
                          <p>
                            <b>Số lượng có trong kho: </b> {soLuong}
                          </p>
                        </p>
                        <br />
                        <b>Số lượng</b>
                        <br />
                        <br />
                        <HStack maxW="180px">
                          <Button {...inc}>+</Button>
                          <Input {...input}/>
                          <Button {...dec}>-</Button>
                        </HStack>
                      </Box>
                    </GridItem>
                    <GridItem rowSpan={1} bg="white">
                      <Stack direction="row" h="200px">
                        <Divider orientation="vertical" ml={10} />
                        <Text>
                          {" "}
                          <b>Dịch vụ của chúng tôi</b>
                          <br />
                          <br />
                          <p>
                            {" "}
                            - Giao hàng tận nhà trong 3 - 7 ngày làm việc.{" "}
                          </p>
                          <br />
                          <p>
                            {" "}
                            - Miễn phí giao hàng Toàn Quốc cho đơn hàng trên 300k.
                          </p>
                        </Text>
                      </Stack>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem rowSpan={1} colSpan={5} bg="white">
                  <br />
                  <Box ml={14}>
                    <Button
                      colorScheme="teal"
                      variant="solid"
                      ml={300}
                      bg={"orange.500"}
                      onClick = { (e) => {
                        router.push("/gio-hang")
                      }}
                    >
                      THÊM VÀO GIỎ HÀNG
                    </Button>
                  </Box>
                </GridItem>
              </GridItem>
              <GridItem rowSpan={2} colSpan={5} bg="white">
                <Box ml={14}>
                  <br></br>
                  <b>Dịch vụ + Khuyến mãi</b>
                  <br />
                  <br />
                  <p>
                    {" "}
                    <Icon as={CheckCircleIcon} /> Tặng móc khoá cho đơn hàng 200k
                  </p>
                  <p>
                    {" "}
                    <Icon as={CheckCircleIcon} />
                    Tăng sổ tay + Freeship cho đơn hàng 300K.
                  </p>
                </Box>
              </GridItem>
            </GridItem>
          </GridItem>
          <GridItem rowSpan={2} colSpan={5} bg="white">
            <Grid
              h="120px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={1} colSpan={1} bg="white">
                <Image
                  src={IMG1}
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg="blue">
                <Image
                  src={IMG2}
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg="blue">
                <Image
                  src={IMG3}
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg="blue">
                <Image
                  src={IMG4}
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg="blue">
                <Image
                  src={IMG5}
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
      <Container maxW={"container.xl"} py={1}>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(1, 1fr)"
          gap={4}
        ></Grid>
        <GridItem rowSpan={1} colSpan={1} bg="white">
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Mô Tả</Tab>
              <Tab>Bình Luận</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>               
                <p>
                  <Center>
                    <Heading as="h2" size="xl" md={14} ml={4}>
                      {tieude}
                    </Heading>
                  </Center> 
                  <br />
                  <br />
                  <Center>
                    <Image
                      src={IMG1}
                      alt="Segun Adebayo"
                      w="30%"
                      h="30%"
                    />
                  </Center>    
                  <br />
                  <br />  
                  <b>Thể loại: </b> {loai}
                  <br/>
                  <b>Giới thiệu: </b>
                  <br/>
                  {baiViet}        
                </p>
              </TabPanel>
              <TabPanel>
                <Textarea placeholder="Thích thì bình luận  ---- Không thích thì cũng bình luận" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </Container>
    </Box>
  );
}

