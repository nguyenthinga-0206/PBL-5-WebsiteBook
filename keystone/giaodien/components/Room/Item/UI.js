import React from "react";
import MessageList from "../../Message/List";
import MessageListUI from "../../Message/List/UI";
import MessageCreate from "../../Message/Create";
import MessageCreateUI from "../../Message/Create/UI";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { CommentIcon } from "@primer/octicons-react";
export default function RoomUI({ room, messages, send }) {
  const [open, setOpen] = useState(false);
  function clickToggle(e) {
    setOpen((open) => !open);
  }
  return (
    <Box position={"fixed"} bottom={5} right={5} textAlign={"end"} maxW={300}>
      {open && (
        <Box bg={"white"} p={3} rounded="md" shadow={"lg"} borderWidth="1px">
          <MessageList UI={MessageListUI} messages={messages} maxH={"35vh"} />
          <MessageCreate UI={MessageCreateUI} send={send} />
        </Box>
      )}
      <Box p={3} onClick={clickToggle} display={"inline-block"}>
        <CommentIcon size={30} />
      </Box>
    </Box>
  );
}
