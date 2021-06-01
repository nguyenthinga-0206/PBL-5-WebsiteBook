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
  useToast,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Fragment, useState, useRef } from "react";
import SachItem from "../../components/Sach/Item";
import SachItemThemGioHangUI from "../../components/Sach/Item/UIThemGioHang";

export default function ChiTietSach({
  id, tenSach, tenTacGia, tenNhaXuatBan, ngayXuatBan, 
  soLuong, soTrang, 
  IMG1, IMG2, IMG3, IMG4, IMG5,
  tieude, baiViet, loai,
  
}) {
  const toast = useToast()
  const toastIdRef = useRef()
  function addToast() {
    toastIdRef.current = toast({ description: "Thêm vào giỏ hàng thành công" })
  }

  const router = useRouter();

  return (
    <Fragment>
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
                <Heading as="h2" size="xl" md={14} ml={14} name = 'tenSach'>
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
            <SachItem UI={SachItemThemGioHangUI} />
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
    </Fragment>
  );

}

