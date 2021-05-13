import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function BaiVietList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
        allBaiviets{
            tieude
            baiViet      
         }
    }`)
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}