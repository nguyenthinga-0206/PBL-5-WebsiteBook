import {
    Input,
    Link,
    Tooltip,
    chakra,
    Icon,
    useToast
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useRef } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function UI({ clickMuaHang }) {
    const router = useRouter();

    const toast = useToast();
    const toastIdRef = useRef();
    function addToast() {
        toastIdRef.current = toast({ description: "Thêm vào giỏ hàng thành công" });
    }

    return (
        <Link
            onClick={(e) => {
                clickMuaHang();
                router.push("/gio-hang");
                addToast();
            }}
        >
            <Tooltip
                label="Thêm vào giỏ"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
            >
                <chakra.a href={"#"} display={"flex"}>
                    <Icon
                        as={FiShoppingCart}
                        h={7}
                        w={7}
                        color={"#22543D"}
                        alignSelf={"center"}
                    />
                </chakra.a>
            </Tooltip>
        </Link>
    );
}