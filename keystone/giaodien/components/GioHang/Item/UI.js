import { Center, GridItem, Grid, Button } from "@chakra-ui/react";
import { Fragment } from "react";
import ChiTietDonHangUpdateUI from "../../ChiTietDonHang/Update/UIChiTietDonHang";

export default function UI({ gioHang, check }) {
  return (
    <Fragment>
      {gioHang?.chiTietDonHang.map((chiTietDonHang, index) => {
        return (
          <ChiTietDonHangUpdateUI
            key={index}
            chiTietDonHang={chiTietDonHang}
            check={check}
          />
        );
      })}
    </Fragment>
  );
}
