import Chat from "./Chat";
export default {
  pages: (props) => {
    return [
      {
        label: "chat",
        path: "chat",
        component: Chat,
      },
      {
        label: "Bài viết",
        listKey: "Baiviet",
      },
      {
        label: "chi tiết đơn hàng",
        listKey: "Chitietdonhang",
      },
      {
        label: "Đơn hàng",
        listKey: "Donhang",
      },
      {
        label: "Giỏ hàng",
        listKey: "Giohang",
      },
      {
        label: "Img",
        listKey: "IMG",
      },
      {
        label: "Nhà cung cấp",
        listKey: "Nhacungcap",
      },
      {
        label: "Phân  loại sách",
        listKey: "Phanloaisach",
      },
      {
        label: "Phiếu nhập sách",
        listKey: "Phieunhapsach",
      },
      {
        label: "Sách",
        listKey: "Sach",
      },
      {
        label: "Users",
        listKey: "User",
      },
    ];
  },
};
