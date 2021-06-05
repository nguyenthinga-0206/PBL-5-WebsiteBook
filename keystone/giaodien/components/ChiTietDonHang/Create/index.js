import { gql, useMutation } from "@apollo/client";
import { gioHang } from "../../GioHang/Create/CreateGioHang";
import UI from "./UI";

export default function ChiTietDonHangCreate({ sachId, soLuong }) {
  const gioHangId = gioHang();
  const [onCreateChitietdonhang, resultCreateChitietdonhang] = useMutation(gql`
    mutation($data: ChitietdonhangCreateInput) {
      createChitietdonhang(data: $data) {
        id
      }
    }
  `);
  /**
   *
   * @param {Event} e
   */
  function clickMuaHang(e) {
    onCreateChitietdonhang({
      variables: {
        data: {
          soLuong,
          gioHang: { connect: { id: gioHangId } },
          sach: { connect: { id: sachId } },
        },
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return <UI clickMuaHang={clickMuaHang} />;
}
