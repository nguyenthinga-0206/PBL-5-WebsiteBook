import ChiTietDonHangItem from '../Item';
import ChiTietUI from '../Item/UI';
export default function UI({data}){
    const {allChitietdonhangs}=data;
    return (
        allChitietdonhangs.map(chiTietDH => {
            return <ChiTietDonHangItem UI={ChiTietUI} key={chiTietDH.id} chiTietDH = {chiTietDH}/>                          
        })
    
    )
}