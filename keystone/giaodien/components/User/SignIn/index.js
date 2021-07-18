import { useApolloClient, useMutation, useSubscription } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

export default function UserSignIn({ UI }) {
  const [onSignInUser, resultSignInUser] = useMutation(gql`
    mutation($email: String!, $password: String!) {
      authenticateUserWithPassword(email: $email, password: $password) {
        token
        item {
          id
          name
          email
          isAdmin
        }
      }
    }
  `);

  const router = useRouter();
  const client = useApolloClient();
  const [notification, setNoti] = useState({ content: "", color: "" });
  const redirect = router.query?.redirect;

  const [values, setValues] = useState({
    email: null,
    password: null,
  });
  /**
   * @param {String} name
   */

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSignIn = async (event) => {
    event.preventDefault();
    try {
      await client.clearStore();
      const { data } = await onSignInUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      if (data.authenticateUserWithPassword) {
        const {
          authenticateUserWithPassword: {
            token,
            item: { id },
          },
        } = data;
        localStorage.setItem("token", token);
        // console.log(token);
        await client.resetStore();
        await router.push({ pathname: redirect ? redirect : "/" });
      }
    } catch (error) {
      console.log(error.toString());
      switch (error.toString()) {
        case `Error: [passwordAuth:secret:mismatch] The password provided is incorrect`:
        case `Error: [passwordAuth:identity:notFound] The email provided didn't identify any undefined`:
          return setNoti({
            color: "var(--color-bg-warning)",
            content: "Sai tên đăng nhập hoặc mật khẩu.",
          });
      }
    }
  };
  return <UI onSignIn={onSignIn} handleChange={handleChange} notification={notification} />
}
