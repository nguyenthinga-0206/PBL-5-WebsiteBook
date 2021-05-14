const { Text, Integer, Relationship, Float, DateTime, DateTimeUtc,Date} = require('@keystonejs/fields');

module.exports = {
  fields: {
    tenSach: {
      type: Text,
      label: 'Tên'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    gia: {
      type: Float,
      label: 'Gia'
    },
    tenNhaXuatBan: {
      type: Text,
      label: 'Nhà xuất bản'
    },
    tenTacGia: {
      type: Text,
      label: 'Tác giả'
    },
    soTrang: {
      type: Integer,
      label: 'Số trang'
    },
    ngayXuatBan: {
      type: DateTime,
      format: 'dd/MM/yyyy',
      yearPickerType: 'auto',
      label: 'Ngày xuất bản'
    },
    
    phanLoaiSach: {
      type: Relationship, ref: 'Phanloaisach.sach', many: false,
      label: 'Phân loại sách'
    },
    IMG: {
      type: Relationship, ref: 'IMG.sach', many: true,
      label: 'IMG'
    },
    phieuNhapSach: {
      type: Relationship, ref: 'Phieunhapsach.sach', many: false,
      label: 'Phiếu nhập sách'
    },
    baiViet: {
      type: Relationship, ref: 'Baiviet.sach', many: false,
      label: 'Bài viết'
    },
    chiTietDonHang: {
      type: Relationship, ref: 'Chitietdonhang.sach', many: false
    },

  },
  labelField: 'tenSach'
}