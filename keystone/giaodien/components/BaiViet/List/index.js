import UI from "./UI";
import { useQuery, gql } from "@apollo/client";
export default function BaiVietList({ first = 3, skip = 0, sortBy, where }) {
  const { loading, error, data } = useQuery(
    gql`
      query(
        $first: Int
        $skip: Int
        $sortBy: [SortBaivietsBy!]
        $where: BaivietWhereInput
      ) {
        allBaiviets(
          first: $first
          skip: $skip
          sortBy: $sortBy
          where: $where
        ) {
          id
          tieude
          baiViet
        }
      }
    `,
    { variables: { first, skip, sortBy, where } }
  );
  if (loading || error) return "Loading...";
  return <UI data={data} />;
}
