import { gql, useMutation } from "@apollo/client";
import { Center } from "@chakra-ui/layout";
import { useState } from "react";
// import { refetchChiTietDonHangList } from "../List";

export default function ChiTietDonHangCreate({ sach, gioHang, soLuong, UI }) {
  const [onCreateChiTietDH, resultCreateChiTietDH] = useMutation(gql`
    mutation($data: ChitietdonhangCreateInput) {
      createChitietdonhang(data: $data) {
        soLuong
        tien
        sach {
          tenSach
          gia
        }
      }
    }
  `);
  const values = {
    sach: { connect: { id: sach.id } },
    gioHang: { connect: { gioHang } },
    tien: sach.gia * soLuong,
    soLuong,
  };
  console.log( values );
  /**
   * @param {String} name
   */
  const onCreate = (e) => {
    onCreateChiTietDH({
      variables: {
        data: values,
      },
    })
      .then((data) => {
        // refetchChiTietDonHangList()();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  if (resultCreateChiTietDH.loading) return "Loading...";

  return (
    <UI
     
    />
  );
}
