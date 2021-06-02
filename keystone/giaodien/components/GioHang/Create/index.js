import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

export default function GioHangCreate({ UI, sach }) {
    const [onCreateGioHang, resultCreateGioHang] = useMutation(gql`
    mutation($data: GiohangCreateInput) {
        createGiohang(data: { data: $data }) {
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

    const [values] = {
        chiTietDonHang: {
            create: {
                soLuong: 1,
                tien: 0,
                sach: { connect: { id: sach.id } }
            }
        }
    };
    console.log(values);

    const onCreate = (e) => {
        onCreateGioHang({
            variables: {
                data: values,
            },
        })
            .catch((e) => {
                console.log(e);
            });
    };

    if (resultCreateGioHang.loading) return "Loading...";
    return (
        <UI
            onCreate={onCreate}
            sach={sach}
        />
    );
}
