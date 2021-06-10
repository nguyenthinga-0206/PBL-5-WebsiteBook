import { Box } from "@chakra-ui/layout";
import { useEffect, useRef } from "react";
import MessageItemUI from "../Item/UI";

export default function MessageListUI({ room, id, messages = [] }) {
  const bottomRef = useRef();
  function scroll() {
    bottomRef.current?.scrollIntoView({});
  }
  useEffect(() => {
    scroll();
  }, [messages.length]);

  return (
    <Box overflowY={"scroll"} maxH={"25vh"} pr={3}>
      {messages.map((message, index) => {
        return <MessageItemUI key={index} message={message} />;
      })}
      <div ref={bottomRef}></div>
    </Box>
  );
}
