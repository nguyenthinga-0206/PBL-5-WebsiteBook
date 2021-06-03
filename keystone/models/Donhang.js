const { Text, Checkbox, Integer, Relationship, Float, DateTime ,Select} = require('@keystonejs/fields');

module.exports = {
  fields: {
    hoten: {
      type: Text,
      label: 'Họ và tên'
    },
    sdt: {
      type: Text,
      label: 'Số điện thoại'
    },
    diachi: {
      type: Text,
      label: 'Địa chỉ giao hàng'
    },
    phiShip: {
      type: Float,
      label: 'Phí giao hàng'
    },
    tongtien: {
      type: Float,
      label: 'Tổng tiền'
    },
    tinhTrangThanhToan: {
      type: Select, options:[
        {value:'tienmat', label :"Thanh toán khi nhận hàng"},
        {value: 'the' ,label :"Thanh toán bằng ví điện tử"},
      ]
      ,
      label: 'Cách thức thanh toán'
    },
    tinhTrangGiao: {
      type :Select, options:[
          {value :'choxacnhan', label :"CHờ xác nhận"},
         {value :'cholayhang',label :"Chờ lấy hàng"},
       {value :'danggiao',label: "Đang giao"},
       {value:'dagiao',label:"Đã giao"},
      ],
      label: 'Tình trạng giao'
      
    },
    duyetBoiTaiKhoan: {
      type: Text,
      label: 'Duyệt bởi tài khoản'
    },
    cachThucGiaoHang: {
       type:Select, options:[
         {value:'giohanhchinh',label:"Chỉ giao hàng trong giờ hành chính"},
         {value:'all',label:"Tất cả các ngày trong tuần"},
       ],
      label :'Cách thức giao hàng'
    
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
    chiTietDonHang: {
      type: Relationship, ref: 'Chitietdonhang.donHang', many: true,
      label: 'Chi tiết đơn hàng'
    }
  },
}