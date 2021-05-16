import { Fragment } from "react";
import HTML from "../../HTML";
import UserDelete from "../Delete";
import UserUpdate from "../Update";

export default function UI({ user }) {
  return (
    <Fragment>
      {HTML.generation(user)}
      <UserDelete />
      <UserUpdate userID={user.id} />
    </Fragment>
  );
}
