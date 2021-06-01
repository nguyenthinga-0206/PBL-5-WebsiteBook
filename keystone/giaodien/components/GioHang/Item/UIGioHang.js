import {
    Box,
    Grid,
    GridItem,
    Center,
    Input,
} from "@chakra-ui/react";
import SachItem from "../../Sach/Item";
import SachItemSachUI from "../../Sach/Item/UISach";
import GioHangXoaUI from "../../GioHang/Item/UIXoa";

export default function UIGioHang({}){
    return(
        <Box bg={"gray.50"}>
            <hr></hr>
            <br/>
            <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(8, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={5} colSpan={1}>
                    <Center mb={20}>
                        <SachItem
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
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>
                        <GioHangXoaUI />
                    </Center>
                </GridItem>  

            </Grid>
            <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
            >
                <GridItem colSpan={1}>
                    <b>Tong Tien: </b>
                    12233d
                </GridItem>
                <GridItem colSpan={1}>
                    <Button
                    onClick={(e) => {
                    router.push("/thanh-toan");
                    }}
                    display={{ base: "none", md: "inline-flex" }}
                    fontSize={"x-small"}
                    w={'100%'}
                    fontWeight={600}
                    color={"white"}
                    bg={"#66CDAA"}
                    href={"#"}
                    _hover={{
                    bg: "#276749",
                    }}
                >
                    Mua hàng
                </Button>
                </GridItem>
            </Grid>
        </Box>
    )
}