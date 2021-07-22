import {
    Box,
    Grid,
    GridItem,
    Center,
    Input,
    Button,
    Image,
    useNumberInput,
    HStack,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default function UI({ chiTietDonHang, onUpdate }) {
    const router = useRouter();
    // Thay đôi so luong mua hang
    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
    } = useNumberInput({
        step: 1,
        defaultValue: chiTietDonHang.soLuong,
        min: 0,
        max: chiTietDonHang.sach?.soLuong,
    });
    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps({ isReadOnly: true });

    return (
        <HStack maxW="180px">
            <Button
                {...inc}
                onClick={ (e) => {
                    onUpdate(parseInt(input.value));
                }}
            >
                +
            </Button>
            <Input textAlign="center" {...input} name='soLuong' />
            <Button
                {...dec}
                onClick={ (e) => {
                    onUpdate(parseInt(input.value));
                }}
            >
                -
            </Button>
        </HStack>
    );
}
