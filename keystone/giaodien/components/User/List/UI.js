import { Fragment } from "react";
import UserItem from '../Item';
import UserItemUI from '../Item/UI';

export default function UI({data}){
    const {allUsers}=data;
    return (
        allUsers.map(user => {
            return <Fragment>
                <UserItem UI={UserItemUI} key={user.id} user = {user}/>  
            </Fragment>                          
        })
    
    )
}