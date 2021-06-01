import UI from './UI'
import {useQuery, gql,makeVar} from '@apollo/client'
export const refetchCartList = makeVar();
export default function GioHangList({ first = 10 , skip = 0, sortBy, where }){
    const {
        loading, error, data, refetch
    } = useQuery (gql 
    `query(
        $first: Int
        $skip: Int
        $sortBy: [SortGiohangsBy!]
        $where: GiohangWhereInput
    ){
       
        allGiohangs(
            first: $first, skip: $skip, sortBy: $sortBy, where: $where
        ) {      
           id 
           chiTietDonHang{
               id
                soLuong
                tien
                sach{
                    tenSach
                    gia
                  	IMG{
                      anh{
                        publicUrl
                      }
                    }
                }
          }
           
        }

    }

    `,{variables: {first, skip, sortBy, where}}
    );
    if(loading || error){
        return "Loading...";
    }
    if (refetch) refetchCartList(refetch);
    return (
        <UI data = {data}/>
    )
}

