import { gql, makeVar, useMutation } from "@apollo/client";
import React, { useEffect } from "react";

export const gioHang = makeVar();

export const CreateGioHang = ({ children }) => {
  const [createGioHang, { loading, data, error, called }] = useMutation(gql`
    mutation {
      createGiohang(data: { chiTietDonHang: { disconnectAll: false } }) {
        id
      }
    }
  `);
  useEffect(() => {
    const local = localStorage.getItem("gioHang");
    if (local) {
      gioHang(local);
    } else if (called === false) {
      createGioHang()
        .then(({ data }) => {
          const {
            createGiohang: { id },
          } = data;
          localStorage.setItem("gioHang", id);
          gioHang(id);
        })
        .catch((e) => console.log(e));
    }
  });
  return <div>{children}</div>;
};
// export const gioHangErrorSolve = (error, router) => {
//   var message = error.toString();
//   console.log(message);
//   if (
//     message === "Nested errors occurred" ||
//     message === "Error: You do not have access to this resource"
//   ) {
//     localStorage.removeItem("gioHang");
//     router.reload();
//   }
// };
