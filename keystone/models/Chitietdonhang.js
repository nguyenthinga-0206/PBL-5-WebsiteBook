const { Text, Checkbox, Password, Integer, Color, Relationship, Float, Select, DateTime, CloudinaryImage, File } = require('@keystonejs/fields');
const { gql } = require("@apollo/client")
module.exports = {
  fields: {
    soLuong: {
      type: Integer,
      label: 'Số lượng'
    },
    tien: {
      type: Float,
      label: 'Thành tiền'
    },
    sach: {
      type: Relationship, ref: 'Sach.chiTietDonHang', many: false,
      label: 'Sách'
    },
    gioHang: {
      type: Relationship, ref: 'Giohang.chiTietDonHang', many: false
    },
    donHang: {
      type: Relationship, ref: 'Donhang.chiTietDonHang', many: false,
    },

  },
  hooks: {
    resolveInput: async ({
      resolvedData,
      context,
    }) => {
      //console.log(resolvedData);
      const {data} = await context.executeGraphQL(
        {
          query: gql`query($id:ID!) {
            Sach(where: { id: $id }) {
              tenSach
              gia
            }
          }
          `, variables: { id:resolvedData.sach }
        }

      )
    resolvedData.tien= data.Sach.gia*resolvedData.soLuong;
    console.log(data);
    console.log(resolvedData);

      return resolvedData;
    },

  },
}