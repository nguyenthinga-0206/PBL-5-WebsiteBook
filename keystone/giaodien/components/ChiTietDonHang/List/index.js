import { useQuery, gql, makeVar } from '@apollo/client';
export const refetchChiTietDHList = makeVar();

export default function ChiTietDonHangList({ UI, first, skip = 0, sortBy, where }) {
    const { loading, error, data, refetch } = useQuery(gql`
        query(
            $first: Int
            $skip: Int
            $sortBy: [SortChitietdonhangsBy!]
            $where: ChitietdonhangWhereInput
        ) {
        allChitietdonhangs(
            first: $first
            skip: $skip
            sortBy: $sortBy
            where: $where
        ) {
            id
            soLuong
            tien
            sach {
                id
                tenSach
                gia
            }
          }
        }
     `,
        { variables: { first, skip, sortBy, where } }
    )
    if (loading || error) {
        return "Loading...";
    }

    if (refetch) refetchChiTietDHList(refetch);

    return (
        <UI data={data} />
    )
}