
import {useQuery, gql} from '@apollo/client'
export default function NhaCungCapList({UI, first = 3, skip = 0, sortBy, where }){
    const {
        loading, error, data
    } = useQuery (gql 
    `query(
        $first: Int
        $skip: Int
        $sortBy: [SortNhacungcapsBy!]
        $where: NhacungcapWhereInput
    ){
       
        allNhacungcaps(
            first: $first
            skip: $skip
            sortBy: $sortBy
            where: $where
        ) {       
            id     
            ten
            diaChi
            sdt
            soLuong
           
        }

    }
    `,{variables: {first, skip, sortBy, where}}
    );
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}