import {route} from "next/dist/next-server/server/router";
import {useRouter} from "next/router";
import { Fragment } from "react";
import GioHang from "./index";

const Sach = () => {
    const  router =  useRouter()
    const {query : {
        id, tenSach, tenTacGia, tenNhaXuatBan, 
        gia, soTrang, ngayXuatBan, soLuong, 
        IMG1, tieude, baiViet, loai
    }} = router;
    return (
    <Fragment>
        <GioHang 
        id = {id} 
        IMG1 = { IMG1}
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