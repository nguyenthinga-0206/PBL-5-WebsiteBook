import UI from "./UI";
import { useQuery, gql } from "@apollo/client";
export default function ImgList({first, skip = 0, sortBy, where }) {
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
