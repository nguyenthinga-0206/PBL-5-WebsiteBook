import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function SachList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
        allSaches{  
            tenSach 
            soLuong
            gia
            tenNhaXuatBan
            tenTacGia
            soTrang
            ngayXuatBan
        }
    }`)
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}