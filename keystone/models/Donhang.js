const { Text, Checkbox, Integer, Relationship, Float, DateTime, Select } = require('@keystonejs/fields');
const { gql } = require("@apollo/client");

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
    tongtien: {
      type: Float,
      label: 'Tổng tiền hàng'
    },
    phiShip: {
      type: Float,
      label: 'Phí giao hàng'
    },
    tongthanhtoan: {
      type: Float,
      label: 'Tổng thanh toán'
    },
    tinhTrangThanhToan: {
      type: Select, options: [
        { value: 'tienmat', label: "Thanh toán khi nhận hàng" },
        { value: 'the', label: "Thanh toán bằng ví điện tử" },
      ]
      ,
      label: 'Cách thức thanh toán'
    },
    tinhTrangGiao: {
      type: Select, options: [
        { value: 'choxacnhan', label: "Chờ xác nhận" },
        { value: 'cholayhang', label: "Chờ lấy hàng" },
        { value: 'danggiao', label: "Đang giao" },
        { value: 'dagiao', label: "Đã giao" },
      ],
      label: 'Tình trạng giao'

    },
    duyetBoiTaiKhoan: {
      type: Text,
      label: 'Duyệt bởi tài khoản'
    },
    cachThucGiaoHang: {
      type: Select, options: [
        { value: 'giohanhchinh', label: "Chỉ giao hàng trong giờ hành chính" },
        { value: 'all', label: "Tất cả các ngày trong tuần" },
      ],
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
    chiTietDonHang: {
      type: Relationship, ref: 'Chitietdonhang.donHang', many: true,
      label: 'Chi tiết đơn hàng'
    },
  },
// hooks: {
//   resolveInput: async ({
//     operation,
//     existingItem,
//     resolvedData,
//     context,
//   }) => {
    // console.log(operation, existingItem, resolvedData);
    // if (operation === "update") {
    //   const { data } = await context.executeGraphQL({
    //     query: gql`
    //       query($id: ID!) {
    //         Donhang(where: { id: $id }) {
    //           chiTietDonHang {
    //             id
    //           }
    //         }
    //       }
    //     `,
    //     variables: { id: existingItem.id },
    //   });
    //   if (!data || !data.Donhang || !data.Donhang.chiTietDonHang)
    //     throw new Error("Don hang khong co chi tiet don hang");
    //   resolvedData.chiTietDonHang = data.Donhang.chiTietDonHang.id;
    // console.log(resolvedData);
    // }
  //   const { data } = await context.executeGraphQL({
  //     query: gql`
  //       query ($id: ID!) {
  //         Chitietdonhang(id: $id) {
  //           id
  //           tien
  //         }
  //       }     
  //       `,
  //     variables: {id: resolvedData.chiTietDonHang },
  //   });

<<<<<<< HEAD
  // hooks: {
  //   resolveInput: async ({
  //     operation,
  //     existingItem,
  //     resolvedData,
  //     context,
  //   }) => {
      // console.log(operation, existingItem, resolvedData);
      // if (operation === "update") {
      //   const { data } = await context.executeGraphQL({
      //     query: gql`
      //       query($id: ID!) {
      //         Chitietdonhang(where: { id: $id }) {
      //           sach {
      //             id
      //           }
      //         }
      //       }
      //     `,
      //     variables: { id: existingItem.id },
      //   });
      //   if (!data || !data.Chitietdonhang || !data.Chitietdonhang.sach)
      //     throw new Error("Chi tiet don hang khong co sach");
      //   resolvedData.sach = data.Chitietdonhang.sach.id;
      //   console.log(resolvedData);
      // }
  //     const { data } = await context.executeGraphQL({
  //       query: gql`
  //         query($id: ID!) {
  //           Giohang(where: { id: $id }) {
  //             chiTietDonHang {
  //               soLuong
  //               tien
  //               sach {
  //                 soLuong
  //                 gia
  //               }
  //             }
  //           }
  //         }
  //       `,
  //       variables: { id: resolvedData.Giohang },
  //     });

  //     resolvedData.tongtien += data.Giohang.chiTietDonHang.tien;
  //     if (resolvedData.tongtien > 300) {
  //       resolvedData.phiShip = 0;
  //     }
  //     resolvedData.phiShip = 30000;
  //     resolvedData.tongthanhtoan = resolvedData.tongtien + resolvedData.phiShip;
  //     console.log(resolvedData);
  //     return resolvedData;
  //   },
  // },
}
=======
  //   // if (!data || !data.Chitietdonhang)
  //   //   throw new Error("Don hang khong co chi tiet don hang");
  //   console.log(resolvedData.chiTietDonHang);
  //   console.log(data.Chitietdonhang);

  //   // resolvedData.tongtien = data.Chitietdonhang?.tien;
  //   if (resolvedData.tongtien > 300000) {
  //     resolvedData.phiShip = 0;
  //   }
  //   else {
  //     resolvedData.phiShip = 30000;
  //   }
  //   resolvedData.tongthanhtoan = resolvedData.tongtien + resolvedData.phiShip;
  //   // console.log(resolvedData);
  //   return resolvedData;
  // },
  // },
};
>>>>>>> b8901301b1a68b328c68f78a71bf0fc70afc960e
