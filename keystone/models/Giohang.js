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
} = require("@keystonejs/fields");

module.exports = {
  fields: {
    chiTietDonHang: {
      type: Relationship,
      ref: "Chitietdonhang.gioHang",
      many: true,
      label: "Chi tiết đơn hàng",
    },
  },
};
