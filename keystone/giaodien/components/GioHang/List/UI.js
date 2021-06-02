import GioHangItem from "../Item";
import GioHangItemUI from "../Item/UI";

export default function UI({ data }) {
  const { allGiohangs } = data;
  return allGiohangs.map((gioHang) => {
    return <GioHangItem UI={GioHangItemUI} key={gioHang.id} gioHang={gioHang} />;
  });
}
