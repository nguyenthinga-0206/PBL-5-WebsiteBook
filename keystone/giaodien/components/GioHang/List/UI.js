import GioHangItem from "../Item";

export default function UI1({ data }) {
  const { allGiophangs } = data;
  return allUsers.map((gioHang) => {
    return <GioHangItem key={gioHang.id} gioHang={gioHang} />;
  });
}
