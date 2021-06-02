import { useQuery, gql } from "@apollo/client";
export default function GioHangList({UI, first, skip = 0, sortBy, where }) {
  const { loading, error, data } = useQuery(gql`
    query (
      $first: Int
      $skip: Int
      $sortBy: [SortGiohangsBy!]
      $where: GiohangWhereInput
    ) {
        allGiohangs (
        first: $first
        skip: $skip
        sortBy: $sortBy
        where: $where
      ) {
        id
        chiTietDonHang{
        sach{
            tenSach
            gia
        }
        soLuong
        tien
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
