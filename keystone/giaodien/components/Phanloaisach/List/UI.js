import PhanloaiItem from '../Item'

export default function UI({data}){
    const {allPhanloaisaches}=data;
    return (
        allPhanloaisaches.map(phanloai => {
            return <PhanloaiItem key={phanloai.id} phanloai = {phanloai}/>                          
        })
    
    );
}