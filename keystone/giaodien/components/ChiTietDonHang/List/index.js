import UI from './UI'
import {useQuery, gql, makeVar} from '@apollo/client'
export const refetchDetailsList = makeVar();
export default function ChiTietDonHangList({ first, skip = 0, sortBy, where }){
    const {
        loading, error, data, refetch
    } = useQuery (gql `
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
                    sach{
                        gia
                        tenSach
                    }
                    gioHang{
                        id
                        
                    }
            }
     
    }
     `,
    { variables: { first, skip, sortBy, where } }
    )
    if(loading || error){
        return "Loading...";
    }
    if (refetch) refetchDetailsList(refetch);
    return (
        <UI data = {data}/>
    )
}