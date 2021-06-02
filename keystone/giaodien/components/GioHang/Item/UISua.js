import {
    Grid,
    GridItem,
    Box,
    Text,
    HStack,
    Button,
    Input,
    Divider,
    Icon,
    Stack,
    useNumberInput,
    useToast,
} from "@chakra-ui/react";
import {
    CheckCircleIcon,
} from "@chakra-ui/icons";
import { useState, useRef } from "react";
import { useRouter } from "next/router";

export default function UISua({  }) {
    const [value, setValue] = useState("1");
    const router = useRouter();

    // Thay đôi so luong mua hang
    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
    } = useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 100,
        precision: 2,
    });
    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps({ isReadOnly: true });
    return (
       
        <HStack maxW="180px">
            <Button {...inc} onClick={(e) => { setValue(input) }}>+</Button>
            <Input {...input} name='soLuong' />
            <Button {...dec} onClick={(e) => { setValue(input) }}>-</Button>
        </HStack>                          
    );
}