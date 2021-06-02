
import { useQuery, gql } from "@apollo/client";
export default function ImgList({UI, first, skip = 0, sortBy, where }) {
  const { loading, error, data } = useQuery(gql`
    query (
      $first: Int
      $skip: Int
      $sortBy: [SortIMGSBy!]
      $where: IMGWhereInput
    ) {
      allIMGS (
        first: $first
        skip: $skip
        sortBy: $sortBy
        where: $where
      ) {
        id
        anh {
          publicUrl
        }
      }
    }
  `,
  {variables: { first, skip, sortBy, where }}
  );
  if (loading || error) {
    return "Loading...";
  }

  return <UI data={data} />;
}
