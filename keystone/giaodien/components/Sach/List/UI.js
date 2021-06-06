import SachItem from '../Item'
import SachItemUI from '../Item/UI'
export default function UI({ data }) {
    const { allSaches } = data;
    return (
        allSaches.map(sach => {
            return <SachItem UI={SachItemUI} key={sach.id} sach={sach} />
        })

    )

}