import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { refetchGioHangItem } from "../../GioHang/Item";
import UI from "./UI";

export default function ChiTietDonHangDelete({ ChiTietID }) {
  const [onDeleteChiTietDonHang, resultDeleteChiTietDonHang] = useMutation(gql`
    mutation ($id: ID!) {
      deleteChitietdonhang ( id: $id )  {   
        id      
      } 
    }
  `);
  const onDelete = (e) => {
    onDeleteChiTietDonHang({
      variables: {
        id: ChiTietID,
      },
    })
      .then((data) => {
        refetchGioHangItem()();
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
