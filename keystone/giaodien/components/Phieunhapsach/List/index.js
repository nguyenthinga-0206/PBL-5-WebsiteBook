import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function NhapsachList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
        allPhieunhapsaches{ 
            ten
            soLuong
            tien
            ngayNhap
        }

    }`)
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}