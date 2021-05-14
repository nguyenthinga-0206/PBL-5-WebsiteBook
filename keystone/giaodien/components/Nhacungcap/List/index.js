import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function NhaCungCapList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
       
        allNhacungcaps{            
            ten
            diaChi
            sdt
            soLuong
           
        }

    }`)
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}