
export default function UI({chiTietDH}){
    return<div>
        <p>soLuong:  {chiTietDH.soLuong} </p>
        <p>tien: {chiTietDH.tien} </p>
        <p>tenSach:  {chiTietDH?.sach?.tenSach}</p>
        <p>giaSach:  {chiTietDH?.sach?.gia}</p>
        
        </div>

}