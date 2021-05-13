import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function ImgList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
        allIMGS{
         anh{publicUrl}
       }
       }`)
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}