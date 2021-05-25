import SachItem from '../Item'

export default function UI( {data,text} ){
    const { allSaches}=data;
    return (
        allSaches.map(sach => {
            return <SachItem key={sach.id} sach = {sach}/>                          
        })
    
    )

}