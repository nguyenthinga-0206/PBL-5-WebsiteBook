import NhapSachItem from '../Item'
import NhapSachUI from '../Item/UI'
export default function UI({data}){
    const {allPhieunhapsaches}=data;
    return (
        allPhieunhapsaches.map(phieuNhapSach => {
            return <NhapSachItem UI={NhapSachUI} key={phieuNhapSach.id} phieuNhapSach = {phieuNhapSach}/>                          
        })
    
    )
}