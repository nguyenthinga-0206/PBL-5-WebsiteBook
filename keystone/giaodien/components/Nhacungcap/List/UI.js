import NhaCungCapItem from '../Item'
import NhaCungCapItemUI from '../Item/UI'
export default function UI({data}){
    const {allNhacungcaps}=data;
    return (
        allNhacungcaps.map(nhaCungCap => {
            return <NhaCungCapItem UI={NhaCungCapItemUI} key={nhaCungCap.id} nhaCungCap = {nhaCungCap}/>                          
        })
    
    )
}