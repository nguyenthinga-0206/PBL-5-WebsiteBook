const { Text, CalendarDay, Integer, Relationship, Float } = require('@itoa/fields');

module.exports = {
  fields: {
    ten: {
      type: Text,
      label: 'Tên'
    },
    sach: {
      type: Relationship, ref: "Sach.phieuNhapSach", many: true,
      label: 'Sách'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    tien: {
      type: Float,
      label: 'Tiền'
    },
    ngayNhap: {
      type: CalendarDay,
      dateFrom: '2001-01-16',
      label: 'Ngày nhập'
    },
    nhaCungCap: {
      type: Relationship, ref: 'Nhacungcap.phieuNhapSach', many: false,
      label: 'Nhà cung cấp'
    },
  },
  labelField: 'ten'
}
