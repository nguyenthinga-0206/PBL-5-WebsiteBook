
import {useQuery, gql} from '@apollo/client'
export default function NhapsachList({UI, first = 4, skip = 0, sortBy, where }){
    const {
        loading, error, data
    } = useQuery (gql `
    query(
        $first: Int
        $skip: Int
        $sortBy: [SortPhieunhapsachesBy!]
        $where: PhieunhapsachWhereInput
      ) {
        
        allPhieunhapsaches(
            first: $first
            skip: $skip
            sortBy: $sortBy
            where: $where
          ){ 
            id
            ten
            soLuong
            tien
            ngayNhap
        }

    }
    `,
    {variables: {first, skip, sortBy, where}}
    );
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}