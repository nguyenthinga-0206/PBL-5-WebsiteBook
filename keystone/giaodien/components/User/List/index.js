
import { useQuery, gql, useMutation, makeVar } from "@apollo/client";
export const refetchUserList = makeVar();
export default function UserList({UI, first = 3, skip = 0, sortBy, where }) {
  const { loading, error, data, refetch } = useQuery(
    gql`
      query(
        $first: Int
        $skip: Int
        $sortBy: [SortUsersBy!]
        $where: UserWhereInput
      ) {
        allUsers(first: $first, skip: $skip, sortBy: $sortBy, where: $where) {
          id
          name
          email
          isAdmin
          password_is_set
        }
      }
    `,
    { variables: { first, skip, sortBy, where } }
  );
  if (loading || error) {
    return "Loading...";
  }
  if (refetch) refetchUserList(refetch);
  return <UI data={data} />;
}
