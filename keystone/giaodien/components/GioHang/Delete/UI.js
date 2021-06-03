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

export default function UI({ onDelete }) {
    return (
        <Center>
            <Button bg={"white"}>
                <Popover>
                    <PopoverTrigger>
                        <Button>
                            {" "}
                            <Icon as={SmallCloseIcon}></Icon>
                        </Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>
                                Bạn có chắc chắn muốn xóa Sản Phẩm không? 
                            </PopoverHeader>
                            <PopoverCloseButton />
                            <PopoverFooter>
                                <Button bg="gray.500" color="black" >
                                    No
                                </Button>
                            </PopoverFooter>
                            <PopoverBody>
                                <Button bg="gray.500" color="black" onClick = {onDelete}>
                                    Yes
                                </Button>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>
            </Button>
        </Center>
    );
}