import { gql, useMutation } from "@apollo/client";
import { Fragment, useState } from "react";

export default function GioHangDelete({ UI, GioHang }) {

  const [onDeleteGioHang, resultDeleteGioHang ] = useMutation(gql`
  mutation ($id: ID!) {
    deleteGiohang (
      id: $id
    ) {
        id
        chiTietDonHang {
          id
        }
    }
  }
  `);
  
  const onDeleteCart = (e) => {
    onDeleteGioHang({
      variables: {
        id: GioHang.id,
      },
    })
      .then((data) => {
        // refetchGioHangList()();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (resultDeleteGioHang.loading) return "Loading...";
  return (
    <UI
      onDeleteCart={onDeleteCart}
    />
  );
}
