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
  const onSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    onSignOutUser()
    .then(() => {
      router.push({ pathname: "/" });
      client
      .resetStore()
      .then(() => { })
      .catch(() => { });
      })
      .catch(() => {
        router.push("/");
      });
  };

  if (resultSignOutUser.loading) return "Loading...";
  return (
    <UI
      onSignOut={onSignOut}
    />
  );
}