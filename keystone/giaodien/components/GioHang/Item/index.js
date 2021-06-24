import { gql, useLazyQuery } from "@apollo/client";
import { gioHang as gioHangId } from "../../GioHang/Create/CreateGioHang";

export default function GioHangItem({ UI, gioHang, check }) {
  const [queryGioHang, { loading, error, data, called }] = useLazyQuery(gql`
    query($id: ID!) {
      Giohang(where: { id: $id }) {
        id
        chiTietDonHang {
          id
          sach {
            id
            tenSach
            IMG {
              id
              anh {
                publicUrl
              }
            }
            gia
            soLuong
          }
          soLuong
          tien
        }
      }
    }
  `);
  const id = gioHangId();
  if (!gioHang && !called && id) {
    queryGioHang({ variables: { id } });
  }
  if (!loading && !error && data) gioHang = data.Giohang;

  // console.log(data);
  return (
    <UI gioHang={gioHang} check={check} />
  );
}
