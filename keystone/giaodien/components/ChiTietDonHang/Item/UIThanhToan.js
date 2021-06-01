import {
    Box,
    Grid,
    GridItem,
    Center,
    Input,
} from "@chakra-ui/react";
import SachItem from "../../Sach/Item";
import SachItemSachUI from "../../Sach/Item/UISach";

export default function UIThanhToan({chiTietDH}){
    return(
        <Box bg={"gray.50"}>
            <hr></hr>
            <br/>
            <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(7, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={5} colSpan={1}>
                    <Center mb={20}>
                        <SachItems
                            UI={SachItemSachUI} 
                        />
                    </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>{chiTietDH.soLuong}</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>{chiTietDH.tien}</Center>
                </GridItem>            
            </Grid>
        </Box>
    )
}