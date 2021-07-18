
const { Text, Checkbox, Integer, Relationship, Float, DateTime, Select } = require('@itoa/fields');
const { useQuery, gql } = require("@apollo/client");

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
  hooks: {
    resolveInput: async ({
      resolvedData,
      context,
    }) => {
      var id = resolvedData.chiTietDonHang.map(chiTietDH => { return { id: chiTietDH } });
      const { data, errors } = await context.executeGraphQL({
        query: gql`
          query($where: DonhangWhereInput) {
            allChitietdonhangs(where: $where) {
              id
              soLuong
              sach {
                id
                tenSach
                soLuong
              }
            }
          }
        `,
        variables: { where: { OR: id } },
      });
      resolvedData.tinhTrangGiao = 'choxacnhan';
      const { allChitietdonhangs: chiTiet } = data;
      var dataUpdate = chiTiet.map(chiTietDH => { return { id: chiTietDH.sach.id, data: { soLuong: chiTietDH.sach.soLuong - chiTietDH.soLuong } } });
      console.log(dataUpdate);
      if (!chiTiet) throw new Error("Don hang khong co chi tiet don hang");

      //  Cap nhat so luong sach
      const { loading, error } = await context.executeGraphQL({
        query: gql`
          mutation($data: [SachesUpdateInput]) {
            updateSaches(data: $data) { 
              tenSach
              soLuong
            }
          }   
        `,
        variables: { data: dataUpdate },
      });

      if (loading || error) throw new Error("So luong sach chua duoc cap nhat");

      return resolvedData;
    },
  },
};
