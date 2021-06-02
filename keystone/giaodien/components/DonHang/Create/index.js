import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

// import { refetchDonHangList } from "../List";

export default function DonHangCreate({UI}) {
  const [onCreateDonHang, resultCreateDonHang] = useMutation(gql`
   mutation($data: DonhangCreateInput) {
      createDonhang(data: $data) {
        hoten
        sdt
        diachi
        tongtien
        tinhTrangThanhToan
        tinhTrangGiao
        duyetBoiTaiKhoan
        cachThucGiaoHang
        ngayDat
        ngayGiao
        chiTietDonHang{
          id
        }
      }
    }
  `);
  const [values, setValues] = useState({
    hoten: null,
    sdt: null,
    diachi: null,
    tongtien:0,
    tinhTrangThanhToan: tienmat,
    tinhtrangGiao: choxacnhan,
    duyetBoiTaiKhoan: null,
    cachThucGiaoHang: giohanhchinh,
    ngayDat: null,
    ngayGiao: null,
  });
  /**
   * @param {String} name
   */
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onCreate = (e) => {
    onCreateDonHang({
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

  if (resultCreateDonHang.loading) return "Loading...";

  return (
    <UI
      handleChange={handleChange}
      onCreate={onCreate}
      resultCreateDonHang={resultCreateDonHang}
    />
  );
}
