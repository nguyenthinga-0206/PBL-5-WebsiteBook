import {route} from "next/dist/next-server/server/router";
import {useRouter} from "next/router";
import { Fragment } from "react";
import GioHangChiTiet from "./index";

const GioHang = () => {
    const  router =  useRouter()
    const {query : {
      id, tenSach, tenTacGia, tenNhaXuatBan, gia, soTrang, ngayXuatBan, 
      soLuong, IMG1, tieude, baiViet, loai
    }} = router;
    return (
    <Fragment>
        <GioHangChiTiet 
         id={id} 
         tenSach={tenSach}
         tenTacGia={tenTacGia}
         tenNhaXuatBan={tenNhaXuatBan}
         gia={gia}
         soTrang = {soTrang}
         ngayXuatBan ={ngayXuatBan}
         soLuong={soLuong}
         IMG1={IMG1}
         tieude={tieude}
         baiViet={baiViet}
         loai={loai}
        />
    </Fragment>
    )
};
export default GioHang;