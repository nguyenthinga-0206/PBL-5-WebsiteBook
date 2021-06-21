import { Button } from "@chakra-ui/button";
import { route, useRouter } from "next/router";
import { Router } from "next/router";

export default function UI({ onSignOut }) {
    const router = useRouter();
    return <Button
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"x-small"}
                w={"100%"}
                fontWeight={600}
                onClick={(e) => {
                    onSignOut;
                    router.push("/dang-nhap");
                }}
                color={"white"}
                bg={"green.300"}
                href={"#"}
                _hover={{
                    bg: "#1C4532",
                }}
            >
                Đăng Xuất
            </Button>
}