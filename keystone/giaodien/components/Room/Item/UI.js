import MessageList from "../../Message/List";
import MessageListUI from "../../Message/List/UI";
import MessageCreate from "../../Message/Create";
import MessageCreateUI from "../../Message/Create/UI";
import { Box } from "@chakra-ui/layout";
import { useShortcut } from "@chakra-ui/hooks";
import { useState } from "react";
export default function RoomUI({ room, messages, create }) {
  const [open, setOpen] = useState(false);
  function clickToggle(e) {
    setOpen((open) => !open);
  }
  return (
    <Box position={"fixed"} bottom={5} right={5} s>
      {open && (
        <Box bg={"white"} p={3} rounded="md" shadow={"lg"} borderWidth="1px">
          <MessageList UI={MessageListUI} messages={messages} />
          <MessageCreate UI={MessageCreateUI} create={create} />
        </Box>
      )}
      <Box ml="auto" width={"65px"} height={"65px"} p={2}>
        <Box
          width="100%"
          height="100%"
          borderRadius="100%"
          bg={"white"}
          shadow="lg"
          onClick={clickToggle}
        ></Box>
      </Box>
    </Box>
  );
}
