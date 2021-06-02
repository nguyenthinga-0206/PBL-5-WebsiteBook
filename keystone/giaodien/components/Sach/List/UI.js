import SachItem from '../Item'
import SachItemUI from '../Item/UI'
// import SachItemUIChiTiet from '../Item/UIChiTiet'
export default function UI({ data, text }) {
    const { allSaches } = data;
    return (
        allSaches.map(sach => {
            return <SachItem UI={SachItemUI} key={sach.id} sach={sach} />
        })

    )

}