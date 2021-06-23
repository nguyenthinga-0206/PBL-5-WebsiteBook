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
  Center,
  Heading
} from "@chakra-ui/react";
import {
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import ChiTietDonHangList from "../../components/ChiTietDonHang/List";
import ChiTietDonHangThanhToanUI from "../../components/ChiTietDonHang/Item/UIThanhToan";
import DonHangCreateUI from "../../components/DonHang/Create/UI";
import DonHangCreate from "../../components/DonHang/Create";
import ThanhTieuDeDangXuatUI from "../../components/ThanhTieuDe/UIDangXuat";
import ChanTrangUI from "../../components/ChanTrang/UI";
import GioHangItem from "../../components/GioHang/Item";
import GioHangItemUI from "../../components/GioHang/Item/UI";
import { Fragment } from "react";

export default function ThanhToan({ chiTietDH }) {

  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();


  return (
    <Fragment>
      <ThanhTieuDeDangXuatUI />
      <Box bg={"gray.50"}>
        <Box bg={"gray.50"} color={"black"}>
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
            <DonHangCreate chiTietDH={chiTietDH} />
          </Container>
        </Box>
      </Box>
      <ChanTrangUI />
    </Fragment>
  );
}

