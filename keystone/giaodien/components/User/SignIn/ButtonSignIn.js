import { Button } from "@chakra-ui/button";
import { useRouter } from "next/router";

export default function ButtonSignIn() {
  const router = useRouter();
  return (
    <Button
      size="sm"
      variant="solid"
      onClick={(e) => {
        router.push("/dang-nhap");
      }}
    >
      Đăng Nhập
    </Button>
  );
}
