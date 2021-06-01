import { Fragment } from "react";
import UserItem from '../Item';
import UserUI from '../Item/UI';
export default function UI({data}){
    const {allUsers}=data;
    return (
        allUsers.map(user => {
            return <Fragment>
                <UserItem UI={UserUI} key={user.id} user = {user}/>  
            </Fragment>                          
        })
    
    )
}