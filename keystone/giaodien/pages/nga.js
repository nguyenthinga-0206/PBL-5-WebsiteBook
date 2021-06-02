import { useRouter } from "next/router";

import BaiVietList from "../components/BaiViet/List";
import ChiTietDonHangList from "../components/ChiTietDonHang/List";
import DonHangList from "../components/DonHang/List";
import ImgList from "../components/Img/List";
import NhapsachList from "../components/Phieunhapsach/List";
import NhaCungCapList from "../components/Nhacungcap/List";
import UserList from "../components/User/List";
import { Fragment, useState } from "react";

export default function Home() {
  const [tuKhoa, setTuKhoa] = useState();
  console.log();
  return (
    <Fragment>
      
      {/* <UserList/> */}
      {/* <input
        type="text"
        style={{ border: "1px solid #333", margin: 34 }}
        onChange={(e) => setTuKhoa(e.target.value)}
      />
      <h2>Bạn đang tìm kiếm: {tuKhoa}</h2>
      <hr /> */}
      {/* <BaiVietList where={{ tieude_contains_i: tuKhoa }} /> */}
      {/* <ChiTietDonHangList where={{soLuong_lte: parseInt(tuKhoa)}}/> */}
      {/* <DonHangList where={{ sdt_contains: tuKhoa }} /> */}
      {/* <ImgList first={parseInt(tuKhoa)} /> */}
      {/* <NhapsachList /> */}
      {/* <UserList /> */}
      {/* <PhanloaiList /> */}
      {/* <SachList /> */}
      {/* <NhaCungCapList /> */}   
    </Fragment> 
  );
}
