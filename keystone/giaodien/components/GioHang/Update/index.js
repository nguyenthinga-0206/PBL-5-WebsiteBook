// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";
// import UI from "./UI";
// import { refetchCartList } from "../List";
// export default function CartUpdate() {
//   const [onUpdateCart, resultUpdateCart] = useMutation(gql`
//     mutation($id: ID!, $data: ChitietdonhangUpdateInput) {
//         updateGiohangs(data: { id: $id, data: $data }) {
//           chiTietDonHang{
//               id
//               soLuong
//               tien
//           }
//         }
//     }
//   `);
//   //   Dữ liệu vào
//   const [values, setValues] = useState({
//     soLuong: 0,
//     tien: 0.0,

//   });
//   /**
//    * @param {int} name
//    */

//   // Xét dữ liệu vào cho values
//   const handleChange = (name) => (event) => {
//     setValues({ ...values, [name]: quantity + 1 });
//   };
 
//   const onUpdate = (e) => {
//     onUpdateUser({
//       //  Truyền dữ liệu vào câu truy vấn
//       variables: {
//         data: values,
//       },
//     })
//       //  Tải lại trang
//       .then((data) => {
//         refetchCartList()();
//       })
//       //  Báo lỗi
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   if (resultUpdateUser.loading) return "Loading...";
//   return (
//     <UI
//       handleChange={handleChange}
//       onUpdate={onUpdate}
//       resultUpdateUser={resultUpdateUser}
//       user={user}
//     />
//   );
// }
