import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { refetchGioHangItem } from "../../GioHang/Item";

export default function ChiTietDonHangUpdate({ UI, chiTietDonHang }) {
    const [onUpdateChiTietDonHang, { loading, error, data }] = useMutation(gql`
    mutation($id: ID!, $data: ChitietdonhangUpdateInput) {
        updateChitietdonhangs(data: { id: $id, data: $data }) {
          id
          soLuong
        }
      }
  `,
    );

    const onUpdate = (value) => {
        console.log(value)
        onUpdateChiTietDonHang({
            variables: {
                id: chiTietDonHang.id,
                data: { soLuong: value },
            },
        })
            .then((data) => {
                console.log(data);
                refetchGioHangItem()();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    if (loading) return "Loading...";

    return (
        <UI
            onUpdate={onUpdate}
            chiTietDonHang={chiTietDonHang}
        />
    );
}
