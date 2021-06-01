import {
    Box,
    Container,
    Grid,
    GridItem,
    Image,
} from "@chakra-ui/react";

export default function UI({donHang}){
    console.log(donHang);
    return (
        <Box borderWidth={2} bg={"white"}>
        <Container maxW={"container.xl"} py={6} ml={14}>
            <Grid
            h="400px"
            w="100%"
            templateRows="repeat(7, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
            >
            <GridItem rowSpan={2} colSpan={1} >
                <br/>
               <p>Don hang: {donHang.id}</p>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} >
                <br />
                <p></p>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} >
                <p>Tổng tiền hàng :</p>
                <p>Vận chuyển :</p>
                <hr></hr>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} >
                <p>
                60,000đ <br />
                30,000đ
                </p>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
                <br />
                <p>Tổng số tiền :</p>
                <hr></hr>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} >
                <br />
                <p>90,000đ</p>
            </GridItem>
            </Grid>
        </Container>
        </Box>
    )
}