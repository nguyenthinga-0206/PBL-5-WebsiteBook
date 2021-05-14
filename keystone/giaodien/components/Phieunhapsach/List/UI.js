import NhapSachItem from '../Item'

export default function UI({data}){
    const {allPhieunhapsaches}=data;
    return (
        allPhieunhapsaches.map(phieuNhapSach => {
            return <NhapSachItem phieuNhapSach = {phieuNhapSach}/>                          
        })
    
    )
}