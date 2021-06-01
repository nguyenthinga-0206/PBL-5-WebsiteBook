import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import ChiTietSach from "../../../pages/chi-tiet-sach/index";
// import { refetchDonHangList } from "../List";

export default function ChiTietDonHangCreate({ sach, gioHang, soLuong }) {
  const [onCreateChiTietDH, resultCreateChiTietDH] = useMutation(gql`
  mutation($data: ChitietdonhangCreateInput){
    createChitietdonhang(data:$data){
      soLuong
      tien
      sach{
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
  };
  console.log({ tenSach });
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
        // refetchDonHangList()();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (resultCreateChiTietDH.loading) return "Loading...";

  return (
    <ChiTietSach
      onCreate={onCreate}
      resultCreateChiTietDH={resultCreateChiTietDH}
    />
  );
}
