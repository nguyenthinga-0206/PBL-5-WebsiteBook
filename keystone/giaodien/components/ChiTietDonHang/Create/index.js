import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import UI from "./UI";
import { refetchDetailsList } from "../List";
export default function UserCreate() {
  const [onCreateUser, resultCreateUser] = useMutation(gql`
    mutation($data: UserCreateInput) {
      createUser(data: $data) {
        id
        name
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
    setValues({ ...values, [name]: event.target.values });
  };
  const onCreate = (e) => {
    onCreateUser({
      variables: {
        data: values,
      },
    })
      .then((data) => {
        refetchDetailsList()();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (resultCreateUser.loading) return "Loading...";
  return (
    <UI
      handleChange={handleChange}
      onCreate={onCreate}
      resultCreateUser={resultCreateUser}
    />
  );
}