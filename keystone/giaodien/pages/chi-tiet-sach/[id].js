import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Fragment } from "react";
import ChiTietSach from "./index";
import SachItem from "../../components/Sach/Item";
import SachItemThemGioHangUI from "../../components/Sach/Item/UIThemGioHang";

const Sach = () => {
    const router = useRouter()
    const { query: { id } } = router;
    const { loading, error, data } = useQuery(gql`query {
        allSaches(where: {id: "${id}"}) {
          id
          tenSach
          soLuong
          gia
          tenNhaXuatBan
          tenTacGia
          soTrang
          ngayXuatBan
          IMG {
            anh {
              publicUrl
            }
          }
          phanLoaiSach {
            loai
          }
          baiViet{
            tieude
            baiViet
          }
        }
      }
      `);
    if (loading || error) return 'Loading...';
    const { allSaches: [sach] } = data;
    return (
        <Fragment>
            <ChiTietSach sach={sach} />
        </Fragment>
    );
};
export default Sach;