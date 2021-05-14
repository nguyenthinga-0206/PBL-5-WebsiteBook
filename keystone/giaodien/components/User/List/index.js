import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function UserList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
       allUsers{
           name
           email
           isAdmin
           password_is_set
       }
    }`)
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}