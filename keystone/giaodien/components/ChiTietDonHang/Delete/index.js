import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
// import { refetchGioHangList } from "../List";

export default function ChiTietDonHangDelete({ UI, GioHang }) {
  const [onDeleteChiTietDonHang, resultDeleteChiTietDonHang ] = useMutation(gql`
    mutation ($id: ID!) {
        deleteChitietdonhang (
            id: $id
        ) {
            id
            sach {
                id
                tenSach
                gia
            }
            soLuong
            tien
        }  
    }
  `);
  console.log(GioHang);
  const onDelete = (e) => {
    onDeleteChiTietDonHang({
      variables: {
        id: ChiTietDHID,
      },
    })
      .then((data) => {

      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (resultDeleteChiTietDonHang.loading) return "Loading...";
  return (
    <UI
      onDelete={onDelete}
    />
  );
}
