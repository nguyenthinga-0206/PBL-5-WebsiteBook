import UI from "./UI";
import { useQuery, gql } from "@apollo/client";
<<<<<<< HEAD
<<<<<<< HEAD
export default function PhanloaiList({ first = 3, skip = 0, sortBy, where,clickPhanLoai,value}) {
=======
export default function PhanloaiList({ first, skip = 0, sortBy, where,clickPhanLoai }) {
>>>>>>> 2f689615f621bfdcce1f698283e353be7b60561e
=======
export default function PhanloaiList({ first, skip = 0, sortBy, where, clickPhanLoai }) {
>>>>>>> 16f000dbc0154f10fa1220a483d4710f4dc7c669
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

  return <UI data={data} value ={value} clickPhanLoai={clickPhanLoai} />;
}
