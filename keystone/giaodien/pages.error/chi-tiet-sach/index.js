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
import { useRouter } from "next/router";
import { Fragment } from "react";
import SachItem from "../../components/Sach/Item";
import SachItemThemGioHangUI from "../../components/Sach/Item/UIThemGioHang";
import ThanhTieuDe from "../../components/ThanhTieuDe";
import ThanhTieuDeUI from "../../components/ThanhTieuDe/UI";
import ChanTrangUI from "../../components/ChanTrang/UI";
import ImgList from "../../components/Img/List" ;

export default function ChiTietSach({ sach }) {
  const router = useRouter();
  var ngayXuatBan = new Date(sach.ngayXuatBan);
  return (
    <Fragment>
      <ThanhTieuDe UI={ThanhTieuDeUI} />
      <Box bg={"gray.50"}>
        <Container maxW={"container.xl"} py={8}>
          <Grid
            h="800px"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={8} colSpan={5} bg="white">
              <Image
                src={sach.IMG[0]?.anh?.publicUrl}
                alt="Segun Adebayo"
                w="100%"
                h="100%"
              />
            </GridItem>
            <GridItem rowSpan={10} colSpan={5} bg="white">
              <GridItem rowSpan={5} colSpan={5} bg="white">
                <Box ml={14}>
                  <Heading as="h2" size="xl" md={14} ml={14} name="tenSach">
                    {sach.tenSach}
                  </Heading>
                  <br />
                  <hr></hr>
                  <br />
                  <p>
                    <b>
                      <i>Mã sản phẩm:</i>
                    </b>{" "}
                    <i> {sach.id}</i>
                  </p>
                  <br />
                  <b>Tác giả1: </b>
                  {sach.tenTacGia}
                  <br />
                  <b>NXB: </b>
                  {sach.tenNhaXuatBan}
                  <br />
                  <b>Năm xuất bản: </b>
                  {ngayXuatBan.getFullYear()}
                  {/* {sach.ngayXuatBan} */}
                  <br />
                  <b>Số trang: </b>
                  {sach.soTrang}
                  <br />
                  <hr />
                  <br></br>
                </Box>
              </GridItem>
              <SachItem UI={SachItemThemGioHangUI} sach={sach} />
            </GridItem>
            <GridItem rowSpan={2} colSpan={5} bg="white">
              <Grid
                h="120px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
              >
                {/* <ImgList where={{id: sach.IMG[1]?.id}} /> */}
                <GridItem rowSpan={1} colSpan={1} >
                  <Image
                    src={sach.IMG[1]?.anh?.publicUrl}
                    alt="Segun Adebayo"
                    w="130px"
                    h="145px"
                  />
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                  <Image
                    src={sach.IMG[2]?.anh?.publicUrl}
                    alt="Segun Adebayo"
                    w="130px"
                    h="145px"
                  />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Image
                    src={sach.IMG[3]?.anh?.publicUrl}
                    alt="Segun Adebayo"
                    w="130px"
                    h="145px"
                  />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} >
                  <Image
                    src={sach.IMG[4]?.anh?.publicUrl}
                    alt="Segun Adebayo"
                    w="130px"
                    h="145px"
                  />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1} >
                  <Image
                    src={sach.IMG[5]?.anh?.publicUrl}
                    alt="Segun Adebayo"
                    w="130px"
                    h="145px"
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
                        {sach?.baiViet[0]?.tieude}
                      </Heading>
                    </Center>
                    <br />
                    <br />
                    <Center>
                      <Image
                        src={sach.IMG[0]?.anh?.publicUrl}
                        alt="Segun Adebayo"
                        w="30%"
                        h="30%"
                      />
                    </Center>
                    <br />
                    <br />
                    <b>Thể loại: </b> {sach?.phanLoaiSach.loai}
                    <br />
                    <b>Giới thiệu: </b>
                    <br />
                    {sach?.baiViet[0]?.baiViet}
                  </p>
                </TabPanel>
                <TabPanel>
                  <Textarea placeholder="Bình luận" />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>
        </Container>
      </Box>
      <ChanTrangUI />
    </Fragment>
  );
}
