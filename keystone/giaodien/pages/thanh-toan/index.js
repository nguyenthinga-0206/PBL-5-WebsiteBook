import {
  Box,
  useDisclosure,
  Container,
  Grid,
  GridItem,
  Center,
  Heading
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DonHangCreate from "../../components/DonHang/Create";
import ThanhTieuDeDangXuatUI from "../../components/ThanhTieuDe/UIDangXuat";
import ChanTrangUI from "../../components/ChanTrang/UI";
import GioHangItem from "../../components/GioHang/Item";
import GioHangItemUI from "../../components/GioHang/Item/UI";
import { Fragment } from "react";
<<<<<<< HEAD
import RoomItem from "../../components/Room/Item";
import RoomItemUI from "../../components/Room/Item/UI";
import { ChatProvider } from "../../Chat";
export default function ThanhToan() {
=======

export default function ThanhToan({ chiTietDH, id }) {
>>>>>>> 2ceccb5c6f32753eb46dd9bd22d87d4713115995

  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();


  return (
    <Fragment>
      <ThanhTieuDeDangXuatUI />
      <ChatProvider>
      <Box bg={"#F0F0F0"}>
        <Box bg={"#F0F0F0"} color={"black"}>
          <Container maxW={"container.xl"} bg="white" py={10}>
            <Heading size="lg" ml={14}>
              <i>Thanh Toán</i>
            </Heading>
            <br />
            <br />
            <hr></hr>
            <Box borderWidth={1} bg={"gray.50"}>
              <br></br>
              <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={1} colSpan={2}>
                  <Center mb={20}>
                    <b>Sản phẩm</b>
                  </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center mb={20}>
                    <b>Đơn Giá</b>
                  </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center>
                    <b>Số lượng</b>
                  </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center>
                    <b>Thành tiền</b>
                  </Center>
                </GridItem>
              </Grid>
            </Box>

            <GioHangItem UI={GioHangItemUI} check={false} />

            <br />
            <br />
            <DonHangCreate chiTietDH={chiTietDH} id={id} />
          </Container>
        </Box>
      </Box>
      <RoomItem UI={RoomItemUI} />
      </ChatProvider>
      <ChanTrangUI />
    </Fragment>
  );
}

