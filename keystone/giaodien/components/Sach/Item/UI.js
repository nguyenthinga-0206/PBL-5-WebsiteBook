export default function UI({ sach }) {
  return (
    <div>
      <br></br>
      <b>TEN SACH: </b>
      <p>{sach.tenSach}</p>
      <p>{sach.soLuong}</p>
      <p>{sach.gia}</p>
      <p>{sach.tenNhaXuatBan}</p>
      <p>{sach.tenTacGia}</p>
      <p>{sach.soTrang}</p>
      <p>{sach.ngayXuatBan}</p>
      <p>{sach.phanLoaiSach?.loai}</p>
    </div>
  );
}
