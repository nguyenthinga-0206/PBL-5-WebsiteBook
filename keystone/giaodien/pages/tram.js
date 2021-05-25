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
import { SimpleGrid } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
export default function Home() {
  const [where, setWhere] = useState({});
  const [keyword, setKeyword] = useState();
  const change = (e) => {
    const { value } = e.target;
    if (value.length > 2) setKeyword(value);
  };
  const clickPhanLoai = (phanloai) => {
    setWhere({ phanLoaiSach: { id: phanloai.id } });
  };
  return (
    <Fragment>
      <img
        width={100}
        src="https://www.graphicsprings.com/filestorage/stencils/68ea7d075a2064907de0c873ea1d81f3.png?width=500&height=500"
      />
      {/* <input placeholder="search" onChange={change} /> */}
      {/* <NextLink href="/gio-hang">
        <button onClick={onUpdate} style={{ marginLeft: 34, color: "blue" }}>Gio hang</button>
      </NextLink>
      <NextLink href="/dang-nhap">
        <a>dang nhap</a>
      </NextLink>
      <NextLink href="/dang-ky">
        <a>dang ky</a>
      </NextLink>
      <SimpleGrid columns={2}>
        <GridItem>
          <PhanloaiList
            first={7}
            UI={PhanloaiListUI}
            clickPhanLoai={clickPhanLoai}
          />
        </GridItem>
        <GridItem>
          <SachList
            first={10}
            UI={SachListUI}
            where={{ AND: [{ tenSach_contains_i: keyword }, where] }}
          />
        </GridItem>
      </SimpleGrid>  */}
     </Fragment>
  );
}
