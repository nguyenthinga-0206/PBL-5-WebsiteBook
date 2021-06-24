import { useQuery, gql } from "@apollo/client";

export default function PhanloaiList({UI, first, skip = 0, sortBy, where, clickPhanLoai }) {
  const { loading, error, data } = useQuery(
    gql`
      query(
        $first: Int
        $skip: Int
        $sortBy: [SortPhanloaisachesBy!]
        $where: PhanloaisachWhereInput
      ) {
        allPhanloaisaches(
          first: $first
          skip: $skip
          sortBy: $sortBy
          where: $where
        ) {
          id
          loai
          soLuong
        }
      }
    `,
    { variables: { first, skip, sortBy, where } }
  );
  
  if (loading || error) {
    return "Loading...";
  }

  return <UI data={data} clickPhanLoai={clickPhanLoai} />;
}