import {
    Box,
    Grid,
    GridItem,
    Center,
    Input,
} from "@chakra-ui/react";
import { Fragment } from "react";

export default function UIThanhToan({}){
    return(
        <Fragment>
            <hr/>
            <Grid
                h="100px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={1} colSpan={2}>
                    <Center mb={20}>
                        asdf
                    </Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>xcv</Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Center>asd</Center>
                </GridItem>  
            </Grid>
            <hr/>
        </Fragment>
    )
}