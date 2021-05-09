const { Text, Integer, Relationship, Float, DateTime } = require('@keystonejs/fields');

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
      label: 'Tên NXB'
    },
    tenTacGia: {
      type: Text,
      label: 'Tên tác giả'
    },
    soTrang: {
      type: Integer,
      label: 'Số trang'
    },
    ngayXuatBan: {
      type: DateTime,
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