// import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import { useRouter } from "next/router";
// import BaiVietList from "../components/BaiViet/List";
// import ChiTietDonHangList from "../components/ChiTietDonHang/List";
// import DonHangList from "../components/DonHang/List";
// import ImgList from "../components/Img/List";
// import NhapSachList from "../components/PhieuNhapSach/List";
// import NhaCungCapList from "../components/NhaCungCap/List";
// import UserList from "../components/User/List";
// import NextLink from "next/link";
import { Fragment, useState } from "react";
import PhanLoaiList from "../components/Phanloaisach/List";
import PhanLoaiListUI from "../components/Phanloaisach/List/UI";
import SachList from "../components/Sach/List";
import SachListUI from "../components/Sach/List/UI";
import ThanhTieuDe from "../components/ThanhTieuDe";
import ThanhTieuDeUI from "../components/ThanhTieuDe/UI";
import ChanTrangUI from "../components/ChanTrang/UI";
import {
  SimpleGrid,
  Grid,
  GridItem,
  Flex,
  Box,
  Center,
} from "@chakra-ui/layout";
import { Button, Container, position } from "@chakra-ui/react";

export default function Home({ singout }) {
  // console.log(singout);
  // Tim kiem
  const [keyword, setKeyword] = useState();
  const change = (e) => {
    const { value } = e.target;
    if (value.length > 0) setKeyword(value);
  };
  // console.log(keyword);

  const [where, setWhere] = useState({});

  const clickPhanLoai = (phanloai) => {
    setWhere({ phanLoaiSach: { id: phanloai.id } });
  };

  return (
    <Fragment>
      <ThanhTieuDe UI={ThanhTieuDeUI} change={change} />
      <Container maxW="container.lg">
        <Grid templateColumns="repeat(8, 1fr)" gap={2} py={4} mb={8}>
          <GridItem colSpan={2} bg="white" p={2} rounded="md">
            <Box pos="sticky" top={90} zIndex={9}>
              <Button colorScheme="green" w="full" mb={2}>
                <Center>DANH MỤC SÁCH</Center>
              </Button>
              <PhanLoaiList
                UI={PhanLoaiListUI}
                clickPhanLoai={clickPhanLoai}
                margin={20}
              />
            </Box>
          </GridItem>
          <GridItem colSpan={6}>
            <SachList
              first={30}
              UI={SachListUI}
              where={{ AND: [{ tenSach_contains_i: keyword }, where] }}
            />
          </GridItem>
        </Grid>
      </Container>
      <ChanTrangUI />
    </Fragment>
  );
}
