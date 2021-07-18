import { GridItem, Box, Button, useToast } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useRouter } from "next/router";


export default function UI({ onCreate, onUpdate }) {
    const toast = useToast();
    const toastIdRef = useRef();
    function addToast() {
        toastIdRef.current = toast({ 
            status:  "success",
            position: "top",
            description: "Mua đơn thành công. Đơn sẽ đươc giao trong 2-3 ngày tới" 
        });
    }

    const router = useRouter()

    return (
        <GridItem colSpan={1} bg="white" ml={280}>
            <Box>
                <Button
                    onClick={(e) => {
                        onCreate();
                        onUpdate();
                        addToast();
                        router.push("/");
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