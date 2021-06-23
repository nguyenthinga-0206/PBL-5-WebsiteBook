import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Fragment } from "react";
import ThanhToan from "./index";

const donhang = () => {
    const router = useRouter()
    const { query: { id } } = router;
    const { loading, error, data } = useQuery(gql`query {
        allChitietdonhangs(
            where: {
                gioHang: { id: "${id}"}
            }
        ) {
            id
            soLuong
            tien
            gioHang {
                id
            }
        }
    }
    `);
    if (loading || error) return 'Loading...';
    const { allChitietdonhangs } = data;
    return (
        <ThanhToan chiTietDH={allChitietdonhangs} />
    );
};
export default donhang;