import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import UI from "./UI";
import { refetchUserList } from "../List";
export default function UserUpdate({userID}) {
  const [onUpdateUser, resultUpdateUser] = useMutation(gql`
  mutation ($id: ID!, $data: UserUpdateInput) {
    updateUsers (
      data: {
        id: $id
        data: $data
    }
    ) {
      id
      name 
      email
      password_is_set
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
        id: userID,
        data: values,
      },
    })
    //  Tải lại trang
      .then((data) => {
        refetchUserList()();
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
    />
  );
}
