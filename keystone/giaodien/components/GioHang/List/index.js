import { useQuery, gql, makeVar } from "@apollo/client";

export default function GioHangList({ UI, first, skip = 0, sortBy, where }) {
  console.log(where);
  const { loading, error, data } = useQuery(
    gql`
      query($first: Int, $skip: Int, $where: GiohangWhereInput) {
        allGiohangs(first: $first, skip: $skip, where: $where) {
          id
          chiTietDonHang {
            id
            sach {
              id
              tenSach
              IMG {
                id
                anh {
                  publicUrl
                }
              }
              gia
              soLuong
            }
            soLuong
            tien
          }
        }
      }
    `,
    { variables: { first, skip, where } }
  );
  if (loading || error) {
    return "Loading...";
  }

  return <UI data={data} />;
}
