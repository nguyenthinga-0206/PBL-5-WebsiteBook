import SachItem from '../Item'

export default function UI({data}){
    const {allSaches}=data;
    return (
        allSaches.map(sach => {
            return <SachItem key={sach.id} sach = {sach}/>                         
        })
    
    )
}