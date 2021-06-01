
import GioHangItem from '../Item'

export default function UI({data}){
    const {allGiohangs}=data;
    return (
        allGiohangs.map(gio => {
            return <GioHangItem key={gio.id} gio = {gio}/>                         
        })
    
    )
}
