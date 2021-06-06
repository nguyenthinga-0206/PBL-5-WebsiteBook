import ChiTietDonHangItem from '../Item';
import ChiTietDonHangItemUI from '../Item/UI';

export default function UI({data}){
    const {allChitietdonhangs}=data;
    return (
        allChitietdonhangs.map(chiTietDH => {
            return <ChiTietDonHangItem UI={ChiTietDonHangItemUI} key={chiTietDH.id} chiTietDH = {chiTietDH}/>                     
        })
    
    )
}