import { useApolloClient, useMutation, gql, useSubscription } from "@apollo/client";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import DangXuat from "../../ThanhTieuDe/UIDangXuat";
export default function UserSignOut({UI}) {
  const [onSignOutUser, resultSignOutUser] = useMutation(gql`
    mutation {
      unauthenticateUser {
        success
      }
    }
  `
  );

  const router = useRouter();
  const client = useApolloClient();
  const [notification, setNoti] = useState({ content: "", color: "" });
  const redirect = router.query?.redirect;
  
  const onSignOut = async (event) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    onSignOutUser()
    .then(() => {
      router.push({ pathname: "/dang-ky" }).then(() => {
        reloadApolloState();
      });
    })
    .catch(() => {
      router.push("/");
    });
    client
      .resetStore()
      .then(() => {})
      .catch(() => {});

    };

  if (resultSignOutUser.loading) return "Loading...";
  return (
    <Fragment>
      <DangXuat
        onSignOut={onSignOut}
      />
    </Fragment>
  );
}