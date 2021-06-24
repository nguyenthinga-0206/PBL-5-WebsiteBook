import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { useEffect, useRef } from "react";
import MessageItemUI from "../Item/UI";

export default function MessageListUI({ messages = [], maxH }) {
  const bottomRef = useRef();
  function scroll() {
    bottomRef.current?.scrollIntoView({});
  }
  useEffect(() => {
    scroll();
  });

  return (
    <Box overflowY={"scroll"} pr={3} maxH={maxH}>
      {messages.map((message, index) => {
        return <MessageItemUI key={index} message={message} />;
      })}
      <div ref={bottomRef}></div>
    </Box>
  );
}
