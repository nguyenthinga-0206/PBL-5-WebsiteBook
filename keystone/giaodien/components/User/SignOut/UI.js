import { Button } from "@chakra-ui/button";
import { route, useRouter } from "next/router";
import { Router } from "next/router";

export default function UI({ onSignOut }) {
    const router = useRouter();
    return (
        <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"x-small"}
            w={"100%"}
            fontWeight={600}
            color={"white"}
            bg={"#48D1CC"}
            href={"#"}
            onClick={onSignOut}
            _hover={{
                bg: "#276749",
            }}
        >
            Đăng Xuất
        </Button>
    );
}