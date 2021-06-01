import {
  useApolloClient,
  useMutation,
  gql,
  useSubscription,
} from "@apollo/client";
// import gql from "graphql-tag";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
export default function UserSignIn({ UI }) {
  const [onSignInUser, resultSignInUser] = useMutation(gql`
    mutation($email: String!, $password: String!) {
      authenticateUserWithPassword(email: $email, password: $password) {
        token
        item {
          id
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
  // console.log(values.email);
  // console.log(values.password);
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
        console.log(token);
        await client.resetStore();
        console.log("reset");
        await router.push({ pathname: redirect ? redirect : "/" });
        console.log("tai-khoan");
      }
    } catch (error) {
      console.log(error.toString());
      switch (error.toString()) {
        case `Error: [passwordAuth:failure] Authentication failed`:
          return setNoti({
            color: "var(--color-bg-warning)",
            content: "Sai tên đăng nhập hoặc mật khẩu.",
          });
      }
    }
  };
  return (
    <Fragment>
      <UI onSignIn={onSignIn} handleChange={handleChange} />
      <p
        style={{
          padding: 5,
          backgroundColor: notification.color,
          textAlign: "center",
        }}
      >
        {notification.content}
      </p>
    </Fragment>
  );
}
