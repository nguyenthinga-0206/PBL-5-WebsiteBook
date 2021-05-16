import { Fragment } from "react";
import HTML from "../../HTML";
import UserDelete from "../Delete";

export default function UI({ user }) {
  return (
    <Fragment>
      {HTML.generation(user)}
      <UserDelete />
    </Fragment>
  );
}
