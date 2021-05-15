import NhaCungCapItem from '../Item'

export default function UI({data}){
    const {allNhacungcaps}=data;
    return (
        allNhacungcaps.map(nhaCungCap => {
            return <NhaCungCapItem key={nhaCungCap.id} nhaCungCap = {nhaCungCap}/>                          
        })
    
    )
}