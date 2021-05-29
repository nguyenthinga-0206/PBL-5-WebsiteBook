// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";
// import UI from "./UI";
// import { refetchDetailsList } from "../List";
// export default function ChitietUpdate({ chitiet }) {
//   const [onUpdateUser, resultUpdateChitiet] = useMutation(gql`
//     mutation($id: ID!, $data: ChitietdonhangUpdateInput) {
//         updateChitietdonhangs(data: { id: $id, data: $data }) {
//                 id
//                 soLuong
//                 tien
        
//         }
//     }
//   `);
//   //   Dữ liệu vào
//   const [stock, setStock] = useState({
//     id: null,
//     soLuong: null ,
//     tien: null,
//   });
  
//   /**
//    * @param {String} currentItems
//    */

//   // Xét dữ liệu vào cho values
//   const manageQuantity = (index, action) => {
//     const currentItems = [...stock];
//     if (action === "increase") {
//       currentItems[index].quantity += 1;
//       setStock(currentItems);
//     }

//     if (currentItems[index].quantity > 1 && action === "decrease") {
//       currentItems[index].quantity -= 1;
//       setStock(currentItems);
//     }
//   };
//   const onUpdate = (e) => {
//     onUpdateUser({
//       //  Truyền dữ liệu vào câu truy vấn
//       variables: {
//         id: chitiet.id,
//         data: stock,
//       },
//     })
//       //  Tải lại trang
//       .then((data) => {
//         refetchDetailsList()();
//       })
//       //  Báo lỗi
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   if (resultUpdateChitiet.loading) return "Loading...";
//   return (
//     <UI
//       manageQuantity={manageQuantity}
//       onUpdate={onUpdate}
//       resultUpdateChitiet={resultUpdateChitiet}
//       chitiet={chitiet}
//     />
//   );
// }
