import { gql, useMutation } from "@apollo/client";
import { refetchChiTietDHList } from "../List";
import { refetchGioHangItem } from "../../GioHang/Item";
import { gioHang } from "../../GioHang/Create/CreateGioHang";
import UI from "./UI";
import UIThemNhanh from "./UIThemNhanh";

export default function ChiTietDonHangCreate({ sachId, soLuong, check }) {
  const gioHangId = gioHang();
  const [onCreateChitietdonhang, {data, loading, error }] = useMutation(gql`
    mutation($data: ChitietdonhangCreateInput) {
      createChitietdonhang(data: $data) {
        id
      }
    }
  `,);
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
        refetchChiTietDHList()();
        refetchGioHangItem()();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  if (loading) return "Loading...";
  
    return (
      check ? <UIThemNhanh clickMuaHang={clickMuaHang} /> : <UI clickMuaHang={clickMuaHang} />
    );
}
