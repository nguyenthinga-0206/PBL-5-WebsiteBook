import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { gioHang as gioHangId } from "../../GioHang/Create/CreateGioHang";

export default function UIMuaHang({ value }) {
    const id = gioHangId();

    const router = useRouter();

    return (
        <Button
            onClick={(e) => {
                value ?
                    router.push({
                        pathname: '/thanh-toan/[id]',
                        query: { id: id }
                    })
                    :
                    router.push("/dang-nhap")
            }}
            display={{ base: "none", md: "inline-flex" }}
            w={"100px"}
            fontWeight={600}
            color={"white"}
            bg={"#66CDAA"}
            _hover={{
                bg: "#276749",
            }}
        >
            Mua hàng
        </Button>
    );
}