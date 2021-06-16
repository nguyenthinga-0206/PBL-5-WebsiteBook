import React from "react";
import { Input } from "@chakra-ui/input";

export default function MessageCreateUI({ submitCreate }) {
  return (
    <form onSubmit={submitCreate}>
      <Input
        name={"content"}
        autoComplete={"off"}
        placeholder="Nhập tin nhắn"
      />
    </form>
  );
}
