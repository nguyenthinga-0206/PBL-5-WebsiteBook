import { Fragment } from "react";
import UserUpdate from "../Update";
import UserUpdateUI from "../Update/UI";

export default function UI({ user }) {
  return (
    <Fragment>
      <UserUpdate UI={UserUpdateUI} user={user} />
    </Fragment>
  );
}
