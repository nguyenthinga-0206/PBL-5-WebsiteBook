// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";
// import UI from "./UI";
// import { refetchDonHangList } from "../List";

// export default function DonHangCreate() {
//   const [onCreateDonHang, resultCreateDonHang] = useMutation(gql`
//    mutation($data: DonhangCreateInput) {
//       createDonhang(data: $data) {
//         sdt
//         tongtien
//         tinhTrangThanhToan
//         tinhTrangGiao
//         duyetBoiTaiKhoan
//         cachThucGiaoHang
//         ngayDat
//         ngayGiao
//         soLuong
//         chiTietDonHang{
//           id
//         }
//       }
//     }


//   `);
//   const [values, setValues] = useState({
//     sdt: null,
//     tongtien:0,
//     tinhTrangThanhToan:null,
//     tinhtrangGiao: null,
//     duyetBoiTaiKhoan: null,
//     cachThucGiaoHang: null,
//     ngayDat: null,
//     ngayGiao: null,
//     soLuong: 0, 
//     ctId: null
//   });
//   /**
//    * @param {String} name
//    */
//   const handleChange = (name) => (event) => {
//     setValues({ ...values, [name]: event.target.values });
//   };
//   const onCreate = (e) => {
//     onCreateDonHang({
//       variables: {
//         data: values,
//       },
//     })
//       .then((data) => {
//         refetchDonHangList()();
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   if (resultCreateDonHang.loading) return "Loading...";

//   return (
//     <UI
//       values={values}
//       handleChange={handleChange}
//       onCreate={onCreate}
//       resultCreateDonHang={resultCreateDonHang}
//     />
//   );
// }
