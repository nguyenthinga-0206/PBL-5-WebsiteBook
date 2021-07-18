import {
    Center,
    Button,
    Popover,
    Portal,
    PopoverBody,
    PopoverArrow,
    PopoverFooter,
    PopoverTrigger,
    PopoverHeader,
    PopoverContent,
    PopoverCloseButton,
    Icon,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useRef } from "react";

export default function UI({ onDelete }) {

    const initRef = useRef()
    return (
        <Popover closeOnBlur={false} placement="left" initialFocusRef={initRef}>
            {({ isOpen, onClose }) => (
                <>
                    <PopoverTrigger>
                        <Button color="white" colorScheme="red" bg={"red.300"} >
                            Xóa
                        </Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverHeader> Bạn có chắc chắn muốn xóa Sản Phẩm không? </PopoverHeader>
                            <PopoverCloseButton />
                            {/* <PopoverBody>
                                <Button
                                    bg="gray.500"
                                    color="black"
                                    onClick={onClose}
                                    ref={initRef}
                                >
                                    No
                                </Button>
                            </PopoverBody> */}
                            <PopoverFooter>
                                <Button
                                    bg="gray.500"
                                    color="black"
                                    onClick={onDelete}
                                >
                                    Yes
                                </Button>
                            </PopoverFooter>
                        </PopoverContent>
                    </Portal>
                </>
            )}
        </Popover>
    )
}