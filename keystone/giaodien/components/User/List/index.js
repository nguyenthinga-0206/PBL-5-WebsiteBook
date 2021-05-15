import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function UserList({first=3, skip =0 , sortBy, where}){
    const {loading, error, data} = useQuery (gql `
    query(
        $first: Int
        $skip: Int
        $sortBy: [SortUsersBy!]
        $where: UserWhereInput    
      
    ) {
       allUsers(
        first: $first
        skip:$skip
        sortBy: $sortBy
        where: $where
       ){
           id
           name
           email
           isAdmin
           password_is_set
       }
    }
    `,
    {variables: {first, skip, sortBy, where} }
    );
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}