import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import BaiVietList from "../components/BaiViet/List";
import ChiTietDonHangList from "../components/ChiTietDonHang/List";
import DonHangList from "../components/DonHang/List";
import ImgList from "../components/Img/List";
import NhapsachList from "../components/Phieunhapsach/List";
import NhaCungCapList from "../components/Nhacungcap/List";
import UserList from "../components/User/List";
import NextLink from "next/link";
import { Fragment, useState } from "react";
import PhanloaiList from "../components/Phanloaisach/List";
import PhanloaiListUI from "../components/Phanloaisach/List/UI";
import SachList from "../components/Sach/List";
import SachListUI from "../components/Sach/List/UI";
import { SimpleGrid, Grid, GridItem } from "@chakra-ui/layout";

export default function Home({ search }) {

  const [where, setWhere] = useState({});
  
  const clickPhanLoai = (phanloai) => {
    setWhere({ phanLoaiSach: { id: phanloai.id } });
  };

  console.log(search);
  return (
    <Fragment>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={1}>
          <PhanloaiList
            UI={PhanloaiListUI}
            clickPhanLoai={clickPhanLoai}
          />
        </GridItem>
        <GridItem colSpan={5}>
          <SimpleGrid columns = {5} spacingX = "2px">
            <SachList
              first={25}
              UI={SachListUI}
              where={{ AND: [{ tenSach_contains_i: search }, where] }}
            />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Fragment>
  );
}
