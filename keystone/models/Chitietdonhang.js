const { Text, Checkbox, Password, Integer, Color, Relationship, Float, Select, DateTime, CloudinaryImage, File } = require('@keystonejs/fields');

module.exports = {
    fields: {
      soLuong: {
        type: Integer,
        label: 'Số lượng'
      },
      tien: {
        type: Float,
        label: 'Giá tiền'
      },
      sach: {
        type: Relationship, ref: 'Sach.chiTietDonHang', many: false,
        label: 'Sách'
      },
      gioHang:{
        type:Relationship,ref:'Giohang.chiTietDonHang',many:false
      },
      donHang:{
        type:Relationship,ref:'Donhang.chiTietDonHang',many:false,
      }
    },
  }