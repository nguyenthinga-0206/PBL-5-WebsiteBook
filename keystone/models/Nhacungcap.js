const { Text, Integer, Relationship } = require('@itoa/fields');

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
    sdt:{
      type: Text,
      label: 'Sdt'
    },
    phieuNhapSach: {
      type: Relationship, ref: 'Phieunhapsach.nhaCungCap', many: true,
      label: 'Phiếu nhập sách'
    },
  },
  labelField: 'ten'
}