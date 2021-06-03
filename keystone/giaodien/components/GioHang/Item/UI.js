import {
    Box,
    Grid,
    GridItem,
    Center,
    Input,
    Button,
    Image,
    useNumberInput,
    HStack
} from "@chakra-ui/react";
import GioHangDelete from "../Delete";
import GioHangDeleteUI from "../Delete/UI";
import { Fragment, useState } from "react";
import {useRouter} from "next/router";

export default function UI({gioHang}){
    const [value, setValue] = useState("1");
    const router = useRouter();

    // Thay đôi so luong mua hang
    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
    } = useNumberInput({
        step: 1,
        defaultValue: gioHang.chiTietDonHang[0]?.soLuong,
        min: 1,
        max: gioHang.chiTietDonHang[0]?.sach?.soLuong,
        precision: 2,
    });
    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps({ isReadOnly: true });

    return(
        <Fragment>
            <hr/>
            <br/>
            <Grid
                h="130px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={1} colSpan={2}>
                    <Center mb={20}>
                       <Image src= {gioHang.chiTietDonHang[0]?.sach?.IMG[0]?.anh?.publicUrl} alt="Segun Adebayo" boxSize="120px"/>
                    </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center mb={20}>
                        {gioHang.chiTietDonHang[0]?.sach?.tenSach}
                    </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>
                    <HStack maxW="180px">
                        <Button {...inc} onClick={(e) => { setValue(input) }}>+</Button>
                        <Input {...input} name='soLuong' />
                        <Button {...dec} onClick={(e) => { setValue(input) }}>-</Button>
                    </HStack> 
                    </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>{new Intl.NumberFormat().format(gioHang.chiTietDonHang[0]?.tien)}đ</Center>
                </GridItem>  
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>
                        <GioHangDelete UI={GioHangDeleteUI} GioHang = {gioHang} />
                    </Center>
                </GridItem>  
            </Grid>
            <hr/>
        </Fragment>
    )
}