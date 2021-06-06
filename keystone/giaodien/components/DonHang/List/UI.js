import DonHangItem from '../Item';
import DonHangItemUI from '../Item/UI';

export default function UI({data}){
    const {allDonhangs}=data;
    return (
        allDonhangs.map(donHang => {
            return <DonHangItem Ui={DonHangItemUI} key={donHang.id} donHang = {donHang}/>                          
        })
    
    )
}