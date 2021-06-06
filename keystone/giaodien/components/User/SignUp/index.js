import { useApolloClient, useMutation, gql, useSubscription } from "@apollo/client";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
export default function UserSignUp({ UI }) {
  const [onSignUpUser, resultSignUpUser] = useMutation(gql`
    mutation($data: UserCreateInput) {
      createUser(data: $data) {
        id
        name
        email
        password_is_set
      }
    }
  `
  );

  const router = useRouter();
  const client = useApolloClient();
  const [notification, setNoti] = useState({ content: "", color: "" });
  const redirect = router.query?.redirect;

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

  const onSignUp = async (event) => {
    event.preventDefault();
    try {
      await client.clearStore();
      const { data, errors } = await onSignUpUser({
        variables: {
          data: values,
        },
      });
      setNoti({
        color: "var(--color-bg-success)",
        content: "Đăng kí thành công.",
      });
      await onSignIn({
        preventDefault: () => { },
        currentTarget: {
          elements: { email: { value: values.email }, password: { value: values.password } },
        },
      });
      await router.push({ pathname: redirect ? redirect : "/dang-nhap" });
    } catch (error) {
      console.log(error.toString());
      switch (error.toString()) {
        case `Error: [password:minLength:User:password] Value must be at least 8 characters long.`:
          return setNoti({
            color: "var(--color-bg-warning)",
            content: "Mật khẩu phải dài hơn 8 kí tự.",
          });
        case `Error: E11000 duplicate key error collection: cnw.users index: email_1 dup key: { email: "${values.email}" }`:
          return setNoti({
            color: "var(--color-bg-warning)",
            content: `Email ${values.email} đã được sử dụng`,
          });
      }
    }
  };

  if (resultSignUpUser.loading) return "Loading...";
  return (
    <Fragment>
      <UI
        onSignUp={onSignUp}
        handleChange={handleChange}
        notification={notification}
      />
    </Fragment>
  );
}