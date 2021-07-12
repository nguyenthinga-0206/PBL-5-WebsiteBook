import { Button } from "@chakra-ui/button";
import { useRouter } from "next/router";

export default function ButtonSignIn() {
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
            onClick={(e) => {
                router.push("/dang-nhap");
            }}
            _hover={{
                bg: "#276749",
            }}
        >
            Đăng Nhập
        </Button>
    );
}