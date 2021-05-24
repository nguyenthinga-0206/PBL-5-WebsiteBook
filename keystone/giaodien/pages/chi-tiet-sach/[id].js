import {route} from "next/dist/next-server/server/router";
import {useRouter} from "next/router";
import { Fragment } from "react";
import ChiTietSach from "./index";

const Sach = () => {
    const  router =  useRouter()
    const {query : {
        id, tenSach, tenTacGia, tenNhaXuatBan, 
        gia, soTrang, ngayXuatBan, soLuong, 
        IMG1, IMG2, IMG3, IMG4, IMG5, 
        tieude, baiViet, loai
    }} = router;
    return (
    <Fragment>
        <ChiTietSach 
        id = {id} 
        IMG1 = { IMG1}
        IMG2 = { IMG2}
        IMG3 = { IMG3}
        IMG4 = { IMG4}
        IMG5 = { IMG5}
        tenSach = {tenSach} 
        tenTacGia = {tenTacGia} 
        tenNhaXuatBan = {tenNhaXuatBan} 
        ngayXuatBan = {ngayXuatBan}
        soLuong = {soLuong}
        gia = {gia}
        soTrang = {soTrang}
        tieude = {tieude}
        baiViet = {baiViet}
        loai = {loai}
        />
    </Fragment>
    )
};
export default Sach;