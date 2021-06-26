import { GridItem, Box, Button } from "@chakra-ui/react";

export default function UI({ onCreate, onUpdate }) {
    return (
        <GridItem colSpan={1} bg="white" ml={280}>
            <Box>
                <Button
                    onClick={(e) => {
                        onCreate();
                        onUpdate();
                    }}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"sm"}
                    fontWeight={50}
                    color={"white"}
                    bg={"orange.500"}
                    href={"#"}
                    _hover={{
                        bg: "teal.600",
                    }}
                >
                    Đặt hàng
                </Button>
            </Box>
        </GridItem>
    );
}