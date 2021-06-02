import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { refetchGioHangList } from "../List";
export default function GioHangUpdate({ UI, user }) {
    const [onUpdateGioHang, resultUpdateGioHang] = useMutation(gql`
    mutation($id: ID!, $data: GiohangUpdateInput) {
        updateGiohangs(data: { id: $id, data: $data }) {
            id
            chiTietDonHang {
              id
              soLuong
              tien
              sach {
                tenSach
                soLuong
                gia
              }
            }
        }
    }
  `);

    const [values, setValues] = useState({
        chiTietDonHang: {connect: {id}}
    });
    /**
     * @param {String} name
     */

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const onUpdate = (e) => {
        onUpdateGioHang({
            variables: {
                data: values,
            },
        })
            .then((data) => {
                refetchGioHangList()();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    if (resultUpdateGioHang.loading) return "Loading...";
    return (
        <UI
            handleChange={handleChange}
            onUpdate={onUpdate}
            resultUpdateGioHang={resultUpdateGioHang}
        />
    );
}
