import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { refetchChiTietDHList } from "../List";
import { refetchGioHangItem } from "../../GioHang/Item";

export default function ChiTietDonHangUpdate({ UI, chiTietDonHang }) {
    const [onUpdateChiTietDonHang, resultUpdateChiTietDonHang] = useMutation(gql`
    mutation($id: ID!, $soLuong: Int) {
        updateChitietdonhang ( 
            id: $id
            data: {
                soLuong: $soLuong
            }
        ) {
            id
            soLuong
        }
    }
  `);
    const [value, setValue] = useState(chiTietDonHang.soLuong);
    /**
     * @param {String} name
     */
    const onUpdate = (e) => {
        onUpdateChiTietDonHang({
            variables: {
                id: chiTietDonHang.id,
                soLuong: value,
            },
        })
            .then((data) => {
                // refetchChiTietDHList()();
                refetchGioHangItem()();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    if (resultUpdateChiTietDonHang.loading) return "Loading...";
    
    return (
        <UI
            handleChange={setValue}
            onUpdate={onUpdate}
            chiTietDonHang={chiTietDonHang}
        />
    );
}
