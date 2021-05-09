const { Text, Integer, Relationship } = require('@keystonejs/fields');

module.exports = {
  fields: {
    ten: {
      type: Text,
      label: 'Tên',
    },
    diaChi: {
      type: Text,
      label: 'Địa chỉ'
    },
    sdt: {
      type: Text,
      label: 'SDT'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    phieuNhapSach: {
      type: Relationship, ref: 'Phieunhapsach.nhaCungCap', many: true,
      label: 'Phiếu nhập sách'
    },
  },
  labelField: 'ten'
}