import { Fragment } from "react";
// import HTML from "../../HTML";
// import UserLogin from "../../../pages/dang-nhap";
import UserUpdate from "../Update";

export default function UI({ user }) {
  return (
    <Fragment>
      {/* {HTML.generation(user)}  */}
      {/* <UserLogin user={user} /> */}
      <UserUpdate user={user} />
    </Fragment>
  );
}
