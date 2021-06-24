import { Button, useToast } from "@chakra-ui/react";
import { useState, useRef } from "react";

export default function UI({ clickMuaHang }) {
  const toast = useToast();
  const toastIdRef = useRef();
  function addToast() {
    toastIdRef.current = toast({
      status: "success",
      position: "top",
      description: "Thêm vào giỏ hàng thành công"
    });
  }

  return (
    <Button
      colorScheme="teal"
      variant="solid"
      ml={300}
      bg={"orange.500"}
      onClick={(e) => {
        clickMuaHang();
        addToast();
      }}
    >
      THÊM VÀO GIỎ HÀNG
    </Button>
  );
}
