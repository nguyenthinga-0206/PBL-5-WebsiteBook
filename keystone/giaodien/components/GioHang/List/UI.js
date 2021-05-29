import GioHangItem from "../Item";

export default function UI1({ data }) {
  const { allGiohangs } = data;
  return allGiohangs.map((gioHang) => {
    return <GioHangItem key={gioHang.id} gioHang={gioHang} />;
  });
}
