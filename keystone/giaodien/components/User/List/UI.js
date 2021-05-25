import { Fragment } from "react";
import UserItem from '../Item';

export default function UI({data}){
    const {allUsers}=data;
    return (
        allUsers.map(user => {
            return <Fragment>
                <UserItem key={user.id} user = {user}/>  
            </Fragment>                          
        })
    
    )
}