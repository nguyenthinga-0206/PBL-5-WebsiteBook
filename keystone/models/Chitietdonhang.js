const {
  Text,
  Checkbox,
  Password,
  Integer,
  Color,
  Relationship,
  Float,
  Select,
  DateTime,
  CloudinaryImage,
  File,
} = require("@itoa/fields");
const { gql } = require("@apollo/client");

module.exports = {
  fields: {
    soLuong: {
      type: Integer,
      label: "Số lượng",
    },
    tien: {
      type: Float,
      label: "Thành tiền",
    },
    sach: {
      type: Relationship,
      ref: "Sach.chiTietDonHang",
      many: false,
      label: "Sách",
    },
    thanhToan: {
      type: Select, options: [
        { value: 'datinh', label: "Đơn đã được tính" },
        { value: 'chuatinh', label: "Đơn chưa được tính" },
      ]
      ,
      label: 'Tinh đơn hàng'
    },
    gioHang: {
      type: Relationship,
      ref: "Giohang.chiTietDonHang",
      many: false,
    },
    donHang: {
      type: Relationship,
      ref: "Donhang.chiTietDonHang",
      many: false,
    },
  },
  hooks: {
    resolveInput: async ({
      operation,
      existingItem,
      resolvedData,
      context,
    }) => {
      console.log(operation, existingItem, resolvedData);
      if (operation === "update") {
        const { data } = await context.executeGraphQL({
          query: gql`
            query($id: ID!) {
              Chitietdonhang(where: { id: $id }) {
                sach {
                  id
                }
              }
            }
          `,
          variables: { id: existingItem.id },
        });
        if (!data || !data.Chitietdonhang || !data.Chitietdonhang.sach)
          throw new Error("Chi tiet don hang khong co sach");
        resolvedData.sach = data.Chitietdonhang.sach.id;
        console.log(resolvedData);
      }
      const { data } = await context.executeGraphQL({
        query: gql`
          query($id: ID!) {
            Sach(where: { id: $id }) {
              tenSach
              gia
            }
          }
        `,
        variables: { id: resolvedData.sach },
      });
      if (!data || !data.Sach)
        throw new Error("Chi tiet don hang khong co sach");

      resolvedData.tien = data.Sach.gia * resolvedData.soLuong;
      return resolvedData;
    },
  },
};
