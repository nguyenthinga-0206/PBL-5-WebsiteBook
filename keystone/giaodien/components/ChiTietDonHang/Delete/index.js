// import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";
// import UI from "./UI";
// import { refetchDetailsList } from "../List";
// export default function UserDelete({userID}) {
//   const [onDeleteUser, resultDeleteUser] = useMutation(gql`
//   mutation ($id: ID!) {
//     deleteUser(
//       id: $id
//     ) {
//       id
//       name
//       email
//       password_is_set
//     }
//   }
//   `);
// console.log(userID);
//   const onDelete = (e) => {
//     onDeleteUser({
//       variables: {
//         id: userID,
//       },
//     })
//       .then((data) => {
//         refetchDetailsList()();
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   if (resultDeleteUser.loading) return "Loading...";
//   return (
//     <UI
//       onDelete={onDelete}
//       resultDeleteUser={resultDeleteUser}
//     />
//   );
// }
