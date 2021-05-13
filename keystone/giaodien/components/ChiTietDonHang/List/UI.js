import ChiTietDonHangItem from '../Item'

export default function UI({data}){
    const {allChitietdonhangs}=data;
    return (
        allChitietdonhangs.map(chiTietDH => {
            return <ChiTietDonHangItem chiTietDH = {chiTietDH}/>                          
        })
    
    )
}