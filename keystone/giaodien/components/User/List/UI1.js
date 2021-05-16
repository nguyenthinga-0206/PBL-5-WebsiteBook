import UserItem from '../Item'

export default function UI1({data}){
    const {allUsers}=data;
    return (
        allUsers.map(user => {
            return <UserItem key={user.id} user = {user}/>                          
        })
    
    )
}