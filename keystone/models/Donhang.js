const { Text, Checkbox, Integer, Relationship, Float, DateTime } = require('@keystonejs/fields');
module.exports = {
  fields: {
    sdt: {
      type: Text,
      label: 'SDT'
    },
    tongtien: {
      type: Float,
      label: 'Tổng tiền'
    },
    tinhTrangThanhToan: {
      type: Checkbox, options: 'đã thanh toán,chưa thanh toán',
      label: 'Tình trạng thánh toán'
    },
    tinhTrangGiao: {
      type: Checkbox, options: 'Chờ xác nhận,Chờ lấy hàng, Đang giao, Đã giao',

      label: 'Tình trạng giao'

    },
    duyetBoiTaiKhoan: {
      type: Text,
      label: 'Duyệt bởi tài khoản'
    },
    cachThucGiaoHang: {
      type: Text,
      label: 'Cách thức giao hàng'
    },
    ngayDat:
    {
      type: DateTime,
      label: 'Ngày đặt'
    },
    ngayGiao: {
      type: DateTime,
      label: 'Ngày giao'
    },
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    chiTietDonHang: {
      type: Relationship, ref: 'Chitietdonhang.donHang', many: true,
      label: 'Chi tiết đơn hàng'
    }
  },
}