import {
    Box,
    Grid,
    GridItem,
    Center,
} from "@chakra-ui/react";
export default function UI({chiTietDH}){
    return(
        <Box bg={"gray.50"}>
            <hr></hr>
            <br/>
            <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={1} colSpan={1}>
                    <Center mb={20}>{chiTietDH.sach.tenSach}</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>{chiTietDH.sach.gia}</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>{chiTietDH.soLuong}</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>{chiTietDH.sach.gia*chiTietDH.soLuong}</Center>
                </GridItem>            
            </Grid>
        </Box>
    )
}