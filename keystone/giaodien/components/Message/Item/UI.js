import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default function MessageItemUI({ message }) {
  return (
    <Flex>
      <Spacer />
      <Box boxShadow="sm" mb={3} p={2} rounded="md" bg="gray.200">
        {message.text}
      </Box>
    </Flex>
  );
}
