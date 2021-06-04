import { Fragment, useState } from "react";
import ChiTietDonHangChiTietDonHangUI from "../../ChiTietDonHang/Update/UIChiTietDonHang";

export default function UI({ gioHang, check }) {

  return (
    <Fragment>
      {gioHang?.chiTietDonHang.map((chiTietDonHang) => {
        return <ChiTietDonHangChiTietDonHangUI chiTietDonHang={chiTietDonHang} check={check} />;
      })}

    </Fragment>
  );
}
