import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
// import { refetchChiTietDonHangList } from "../List";

export default function ChiTietDonHangUpdate({ UI, chiTietDonHang }) {
    const [onUpdateChiTietDonHang, resultUpdateChiTietDonHang] = useMutation(gql`
    mutation($id: ID!, $soLuong: Int) {
        updateChitietdonhangs ( 
            data: {
                id: $id
                data: {
                  soLuong: $soLuong
                }
              }
        ) {
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
        soLuong: chiTietDonHang.soLuong,
    });
    /**
     * @param {String} name
     */
    // console.log(values.id,values.soLuong);

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    const onUpdate = (e) => {
        onUpdateChiTietDonHang({
            variables: {
                id: values.id,
                soLuong: values.soLuong,
            },
        })
            .then((data) => {
                // refetchChiTietDonHangList()();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    if (resultUpdateChiTietDonHang.loading) return "Loading...";
    return (
        <UI
            handleChange={handleChange}
            onUpdate={onUpdate}
            chiTietDonHang={chiTietDonHang}
        />
    );
}
