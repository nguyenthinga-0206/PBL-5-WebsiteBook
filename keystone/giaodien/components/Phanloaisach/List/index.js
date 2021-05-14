import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function PhanloaiList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
        allPhanloaisaches{
            loai
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