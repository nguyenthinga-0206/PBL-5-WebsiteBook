const { Text, Integer, Relationship } = require('@keystonejs/fields');
module.exports = {
  fields: {
    loai: {
      type: Text,
      label: 'Loại sách'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    sach: {
      type: Relationship, ref: 'Sach.phanLoaiSach', many: true,
      label: 'Sách'
    },
  },
  labelField: 'loai'
}