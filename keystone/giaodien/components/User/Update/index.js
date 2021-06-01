import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { refetchUserList } from "../List";
export default function UserUpdate({UI, user }) {
  const [onUpdateUser, resultUpdateUser] = useMutation(gql`
    mutation($id: ID!, $data: UserUpdateInput) {
      updateUsers(data: { id: $id, data: $data }) {
        id
        name
        email
        password_is_set
      }
    }
  `);
  
  const [values, setValues] = useState({
    name: null,
    email: null,
    password: null,
  });
  /**
   * @param {String} name
   */

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onUpdate = (e) => {
    onUpdateUser({
      variables: {
        id: user.id,
        data: values,
      },
    })
      .then((data) => {
        refetchUserList()();
      })
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
