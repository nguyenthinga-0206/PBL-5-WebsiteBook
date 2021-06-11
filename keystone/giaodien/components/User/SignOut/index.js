import { useApolloClient, useMutation, useSubscription } from "@apollo/client";
import gql from "graphql-tag";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default function UserSignOut({ UI }) {
  const [onSignOutUser, resultSignOutUser] = useMutation(gql`
    mutation{
      unauthenticateUser{
        success
      }
    }
  `
  );

  const router = useRouter();
  const client = useApolloClient();
  const [notification, setNoti] = useState({ content: "", color: "" });

  const onSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    onSignOutUser()
      .then(() => {
          reloadApolloState();
      })
      .catch(() => {
        router.push("/");
      });
    client
      .resetStore()
      .then(() => { })
      .catch(() => { });
  };

  if (resultSignOutUser.loading) return "Loading...";
  return (
    <UI
      onSignOut={onSignOut}
    />
  );
}