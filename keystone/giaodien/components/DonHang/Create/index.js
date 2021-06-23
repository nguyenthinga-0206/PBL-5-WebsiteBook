import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import UI from "./UI";

export default function DonHangCreate({ chiTietDH }) {
  var arrayID = (
    chiTietDH.map(chiTiet => {
      return { id: chiTiet.id }
    })
  )

  var tien = (
    chiTietDH.map(chiTiet => {
      return chiTiet.tien
    })
  )
  var tongtien = 0;
  for (let index = 0; index < tien.length; index++) {
    tongtien += tien[index];
  }

  var phiShip = 0;
  if (tongtien < 300000) {
    phiShip = 30000;
  }

  var ngayDat = new Date();
  var ngayGiao = new Date(ngayDat.getFullYear(), ngayDat.getMonth(), ngayDat.getDate() + 3);

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
    tongtien: tongtien,
    phiShip: phiShip,
    tongthanhtoan: tongtien + phiShip,
    tinhTrangThanhToan: 'tienmat',
    duyetBoiTaiKhoan: null,
    cachThucGiaoHang: 'giohanhchinh',
    ngayDat: ngayDat,
    ngayGiao: ngayGiao,
    chiTietDonHang: {
      connect: arrayID
    }
  });
  console.log(values);
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
      tongtien={tongtien}
      phiShip={phiShip}
      tongthanhtoan={values.tongthanhtoan}
      resultCreateDonHang={resultCreateDonHang}
    />
  );
}
