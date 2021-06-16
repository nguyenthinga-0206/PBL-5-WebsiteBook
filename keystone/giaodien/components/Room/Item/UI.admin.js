import React from "react";
import MessageList from "../../Message/List";
import MessageListUI from "../../Message/List/UI";
import MessageCreate from "../../Message/Create";
import MessageCreateUI from "../../Message/Create/UI";
import { Box } from "@chakra-ui/layout";
export default function RoomUI({ room, messages, send }) {
  return (
    <Box bg={"white"} p={3} rounded="md" shadow={"lg"} borderWidth="1px">
      <MessageList UI={MessageListUI} messages={messages} maxH={"80vh"} />
      <MessageCreate UI={MessageCreateUI} send={send} />
    </Box>
  );
}
