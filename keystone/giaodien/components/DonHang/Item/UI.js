export default function UI({ donHang }) {
    return (
        <div>
            <p>{donHang.hoten}</p>
            <p>{donHang.sdt}</p>
            <p>{donHang.diachi}</p>
            <p>{donHang.tongtien}</p>
            <p>{donHang.tinhTrangThanhToan}</p>
            <p>{donHang.cachThucGiaoHang}</p>
            <p>{donHang.ngayDat}</p>
            <p>{donHang.ngayGiao}</p>
        </div>
    )
}

