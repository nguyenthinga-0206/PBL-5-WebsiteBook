
export default function UI({user}){
    return<div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{(user.isAdmin&&user.password_is_set)?<p>Welcome admin</p>:<p>Not Admin</p>}</p>
        </div>

}