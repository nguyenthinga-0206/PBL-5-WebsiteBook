import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Fragment } from "react";
import ChiTietSach from "./index";

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
       <ChiTietSach sach={sach} />
    );
};
export default Sach;