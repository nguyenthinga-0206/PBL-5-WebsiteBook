import { Fragment } from "react";
import ChiTietDonHangUpdateUI from "../../ChiTietDonHang/Update/UIChiTietDonHang";

export default function UI({ gioHang, check }) {
  return (
    <Fragment>
      {gioHang?.chiTietDonHang.map((chiTietDonHang) => {
        return (
          <ChiTietDonHangUpdateUI
            chiTietDonHang={chiTietDonHang}
            check={check}
          />
        )
      })}
    </Fragment>


  );
}
