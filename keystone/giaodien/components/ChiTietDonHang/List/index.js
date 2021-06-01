import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function ChiTietDonHangList({ first, skip = 0, sortBy, where }){
    const {
        loading, error, data
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
            sach {
                tenSach
                gia
            }
          }
        }
     `,
    { variables: { first, skip, sortBy, where } }
    )
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}