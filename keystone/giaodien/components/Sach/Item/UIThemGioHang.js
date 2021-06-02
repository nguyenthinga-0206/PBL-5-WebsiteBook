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
import { useQuery, gql, useMutation } from "@apollo/client";

export default function UIThemGioHang({ sach }) {
    const [value, setValue] = useState("1");
    const router = useRouter();

    const toast = useToast()
    const toastIdRef = useRef()
    function addToast() {
        toastIdRef.current = toast({ description: "Thêm vào giỏ hàng thành công" })
    }
    // Thay đôi so luong mua hang
    const {
        getInputProps,
        getIncrementButtonProps,
        getDecrementButtonProps,
    } = useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: sach.soLuong,
        precision: 2,
    });
    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps({ isReadOnly: true });
    return (
        <GridItem rowSpan={5} colSpan={5} bg="white">
            <GridItem rowSpan={3} colSpan={5} bg="white">
                <GridItem rowSpan={2} colSpan={5} bg="white">
                    <Grid
                        h="200px"
                        templateRows="repeat(1, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        gap={4}
                    >
                        <GridItem rowSpan={1} bg="white">
                            <Box ml={14}>
                                <p>
                                    <p>
                                        <b name='gia'>Giá:</b>{" "}
                                        <Text fontSize="xl" ml={30} color={"green.600"}>
                                            {" "}
                                            {new Intl.NumberFormat().format(sach.gia)}đ
                        </Text>{" "}
                                    </p>
                                    <br />
                                    <p>
                                        <b>Số lượng có trong kho: </b> {sach.soLuong}
                                    </p>
                                </p>
                                <br />
                                <b>Số lượng</b>
                                <br />
                                <br />
                                <HStack maxW="180px">
                                    <Button {...inc} onClick={(e) => { setValue(input) }}>+</Button>
                                    <Input {...input} name='soLuong' />
                                    <Button {...dec} onClick={(e) => { setValue(input) }}>-</Button>
                                </HStack>
                            </Box>
                        </GridItem>
                        <GridItem rowSpan={1} bg="white">
                            <Stack direction="row" h="200px">
                                <Divider orientation="vertical" ml={10} />
                                <Text>
                                    {" "}
                                    <b>Dịch vụ của chúng tôi</b>
                                    <br />
                                    <br />
                                    <p>
                                        {" "}
                        - Giao hàng tận nhà trong 3 - 7 ngày làm việc.{" "}
                                    </p>
                                    <br />
                                    <p>
                                        {" "}
                        - Miễn phí giao hàng Toàn Quốc cho đơn hàng trên 300k.
                        </p>
                                </Text>
                            </Stack>
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem rowSpan={1} colSpan={5} bg="white">
                    <br />
                    <Box ml={14}>
                        <Button
                            colorScheme="teal"
                            variant="solid"
                            ml={300}
                            bg={"orange.500"}
                            onClick={addToast}
                        >
                            THÊM VÀO GIỎ HÀNG
                </Button>
                    </Box>
                </GridItem>
            </GridItem>
            <GridItem rowSpan={2} colSpan={5} bg="white">
                <Box ml={14}>
                    <br></br>
                    <b>Dịch vụ + Khuyến mãi</b>
                    <br />
                    <br />
                    <p>
                        {" "}
                        <Icon as={CheckCircleIcon} /> Tặng móc khoá cho đơn hàng 200k
                </p>
                    <p>
                        {" "}
                        <Icon as={CheckCircleIcon} />
                Tăng sổ tay + Freeship cho đơn hàng 300K.
                </p>
                </Box>
            </GridItem>
        </GridItem>
    );
}