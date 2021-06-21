import { gql, useMutation } from "@apollo/client";
import { ListItem } from "@chakra-ui/layout";
import { Fragment } from "react";
import { gioHang } from "../../GioHang/Create/CreateGioHang";
import UI from "./UI";
import UIThemNhanh from "./UIThemNhanh";

export default function ChiTietDonHangCreate({ sachId, soLuong, check }) {
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
  return (
    check ? <UIThemNhanh clickMuaHang={clickMuaHang} /> : <UI clickMuaHang={clickMuaHang} />
  );
}
