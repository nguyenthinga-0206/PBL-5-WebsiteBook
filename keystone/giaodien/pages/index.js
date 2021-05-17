import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import BaiVietList from "../components/BaiViet/List";
import ChiTietDonHangList from "../components/ChiTietDonHang/List";
import DonHangList from "../components/DonHang/List";
import ImgList from "../components/Img/List";
import NhapsachList from "../components/Phieunhapsach/List";
import NhaCungCapList from "../components/Nhacungcap/List";
import UserList from "../components/User/List";
import { Fragment, useState } from "react";
import PhanloaiList from "../components/Phanloaisach/List";
import SachList from "../components/Sach/List";
import UserCreate from "../components/User/Create";
import UserDelete from "../components/User/Delete";
export default function Home() {
  const pStyle = {
    fontSize: "20px",
    margin: 34,
  };
  const [tuKhoa, setTuKhoa] = useState();
  return (
    <Fragment>
      <input
        type="text"
        style={{ border: "1px solid #333", margin: 34, background: "skyblue" }}
        onChange={(e) => setTuKhoa(e.target.value)}
      />
      <p style={pStyle}>Bạn đang tìm kiếm: {tuKhoa}</p>
      <hr />
      <UserList first={10} where={{ name_contains_i: tuKhoa }} />
      {/* <UserCreate /> */}
      <UserDelete/>
      {/* <SachList where={{ tenSach_contains_i: tuKhoa }} /> */}
      {/* <NhaCungCapList where={{ ten_contains_i: tuKhoa }} /> */}
      {/* <NhapsachList where={{ ten_contains_i: tuKhoa }} /> */}
      {/* <PhanloaiList where={{ loai_contains_i: tuKhoa }} />  */}
      {/* <ImgList />
      {/* <ChiTietDonHangList />
      <DonHangList />
      <NhapsachList />
      <UserList />
      <PhanloaiList />
      <SachList />
      <NhaCungCapList /> */}
    </Fragment>
  );
}
