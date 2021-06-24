import { Fragment } from "react";
import DonHangList from "../../components/DonHang/List";
import DonHangListUI from "../../components/DonHang/List/UI";

export default function ThongBao() {
    return (
        <Fragment>
            <DonHangList UI={DonHangListUI} first={5} />
        </Fragment>
    );
}