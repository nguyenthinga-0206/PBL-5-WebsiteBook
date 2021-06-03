import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
// import { refetchGioHangList } from "../List";

export default function GioHangDelete({ UI, GioHangID }) {
  const [onDeleteGioHang, resultDeleteGioHangor ] = useMutation(gql`
  mutation ($id: ID!) {
    deleteGiohang (
      id: $id
    ) {
        id
        chiTietDonHang {
        sach {
            tenSach
            IMG {
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
  console.log(GioHangID);
  const onDelete = (e) => {
    onDeleteGioHang({
      variables: {
        id: GioHangID,
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
      onDelete={onDelete}
    />
  );
}
