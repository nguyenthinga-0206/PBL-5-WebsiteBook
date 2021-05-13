import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function ChiTietDonHangList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
        allChitietdonhangs{
         soLuong
         tien
       }
       }`)
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}