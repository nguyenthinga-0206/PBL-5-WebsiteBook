import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import UI from "./UI";
import { refetchCartList } from "../List";
export default function UserUpdate({ user }) {
  const [onUpdateCart, resultUpdateCart] = useMutation(gql`
    mutation($id: ID!, $data: ChitietdonhangUpdateInput) {
        updateGiohangs(data: { id: $id, data: $data }) {
        chiTietDonHang{
            id
            soLuong
            tien
        }
        }
    }
  `);
  //   Dữ liệu vào
  const [values, setValues] = useState({
    name: null,
    email: null,
    password: null,
  });
  /**
   * @param {String} name
   */

  // Xét dữ liệu vào cho values
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onUpdate = (e) => {
    onUpdateUser({
      //  Truyền dữ liệu vào câu truy vấn
      variables: {
        id: user.id,
        data: values,
      },
    })
      //  Tải lại trang
      .then((data) => {
        refetchCartList()();
      })
      //  Báo lỗi
      .catch((e) => {
        console.log(e);
      });
  };

  if (resultUpdateUser.loading) return "Loading...";
  return (
    <UI
      handleChange={handleChange}
      onUpdate={onUpdate}
      resultUpdateUser={resultUpdateUser}
      user={user}
    />
  );
}
