import UserItem from '../Item'

export default function UI({data}){
    const {allUsers}=data;
    return (
        allUsers.map(user => {
            return <UserItem key={user.id} user = {user}/>                          
        })
    
    )
}