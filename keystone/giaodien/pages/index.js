import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import BaiVietList from "../components/BaiViet/List";
import ChiTietDonHangList from "../components/ChiTietDonHang/List";
import DonHangList from "../components/DonHang/List";
import ImgList from "../components/Img/List";
import NhapSachList from "../components/PhieuNhapSach/List";
import NhaCungCapList from "../components/NhaCungCap/List";
import UserList from "../components/User/List";
import NextLink from "next/link";
import { Fragment, useState } from "react";
import PhanLoaiList from "../components/PhanLoaiSach/List";
import PhanLoaiListUI from "../components/PhanLoaiSach/List/UI";
import SachList from "../components/Sach/List";
import SachListUI from "../components/Sach/List/UI";
<<<<<<< HEAD
import { SimpleGrid } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { GridItem,Text } from "@chakra-ui/layout";
=======
import { SimpleGrid, Grid, GridItem } from "@chakra-ui/layout";
import Search from "../components/ThanhTieuDe";

>>>>>>> 2f689615f621bfdcce1f698283e353be7b60561e
export default function Home() {

  // Tim kiem
  const [keyword, setKeyword] = useState();
  const change = (e) => {
  const { value } = e.target;
  if (value.length > 0) setKeyword(value);
  };
  console.log(keyword);

  const [where, setWhere] = useState({});
 
  const clickPhanLoai = (phanloai) => {
    setWhere({ phanLoaiSach: { id: phanloai.id } });
  };

  return (
    <Fragment>
<<<<<<< HEAD
      <img
        width={100}
        src="https://www.graphicsprings.com/filestorage/stencils/68ea7d075a2064907de0c873ea1d81f3.png?width=500&height=500"
      />
      
      <input placeholder="search" onChange={change} />
      <NextLink href="/gio-hang">
        <a>gio hang</a>
      </NextLink>
      <NextLink href="/dang-nhap">
        <a>dang nhap</a>
      </NextLink>
      <NextLink href="/dang-ky">
        <a>dang ky</a>
      </NextLink>
      <SimpleGrid columns={2}>
        <GridItem>
          
=======
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={1}>
<<<<<<< HEAD
>>>>>>> 2f689615f621bfdcce1f698283e353be7b60561e
          <PhanloaiList
            UI={PhanloaiListUI}
=======
          <PhanLoaiList
            UI={PhanLoaiListUI}
>>>>>>> 16f000dbc0154f10fa1220a483d4710f4dc7c669
            clickPhanLoai={clickPhanLoai}
            value ={keyword} 
          />
        </GridItem>
<<<<<<< HEAD
        <GridItem>
          <Text>Kết quả cho: {keyword}</Text>
          <SachList
            first={10}
            UI={SachListUI}
            where={{ AND: [{ tenSach_contains_i: keyword }, where] }}
          />
=======
        <GridItem colSpan={5}>
          <SimpleGrid columns = {5} spacingX = "2px">
            <SachList
              first={25}
              UI={SachListUI}
              where={{ AND: [{ tenSach_contains_i: keyword }, where] }}
            />
          </SimpleGrid>
>>>>>>> 2f689615f621bfdcce1f698283e353be7b60561e
        </GridItem>
      </Grid>
    </Fragment>
  );
}
