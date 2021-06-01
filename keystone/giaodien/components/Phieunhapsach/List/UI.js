import NhapSachItem from '../Item';
import NhapSachItemUI from '../Item/UI';

export default function UI({data}){
    const {allPhieunhapsaches}=data;
    return (
        allPhieunhapsaches.map(phieuNhapSach => {
        return <NhapSachItem UI={NhapSachItemUI} key={phieuNhapSach.id} phieuNhapSach = {phieuNhapSach}/>                          
        })
    
    )
}