import { Button } from "@chakra-ui/button";

export default function UI({ clickMuaHang }) {
  return (
    <Button
      colorScheme="teal"
      variant="solid"
      ml={300}
      bg={"orange.500"}
      onClick={clickMuaHang}
    >
      THÊM VÀO GIỎ HÀNG
    </Button>
  );
}
