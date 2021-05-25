import UI from "./UI";
import { useQuery, gql } from "@apollo/client";
export default function SachList({ first = 3, skip = 0, sortBy, where }) {
  const { loading, error, data } = useQuery(
    gql`
      query(
        $first: Int
        $skip: Int
        $sortBy: [SortSachesBy!]
        $where: SachWhereInput
      ) {
        allSaches(first: $first, skip: $skip, sortBy: $sortBy, where: $where) {
          IMG {
            anh {
              publicUrl
            }
          }
          id
          tenSach
          soLuong
          gia
          tenNhaXuatBan
          tenTacGia
          soTrang
          ngayXuatBan
          phanLoaiSach {
            loai
          }
        }
      } # Write your query or mutation here
    `,
    { variables: { first, skip, sortBy, where } }
  );
  if (loading || error) {
    return "Loading...";
  }

  return <UI data={data}  text = {1}/>;
}
