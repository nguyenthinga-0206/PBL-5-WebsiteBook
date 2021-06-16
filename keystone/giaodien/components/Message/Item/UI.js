import React, { useEffect, useState } from "react";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default function MessageItemUI({ message }) {
  return (
    <Flex>
      {message.isMe && <Spacer />}
      <Box
        boxShadow="sm"
        mb={3}
        py={1}
        px={4}
        rounded="lg"
        bg={message.isMe ? "blue.200" : "gray.200"}
      >
        {message.text}
      </Box>
      {!message.isMe && <Spacer />}
    </Flex>
  );
}
