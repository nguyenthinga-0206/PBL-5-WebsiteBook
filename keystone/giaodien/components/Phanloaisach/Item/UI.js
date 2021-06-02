import { Button } from "@chakra-ui/button";
import { ListIcon, ListItem } from "@chakra-ui/layout";
import { Fragment } from "react";
import {MdCheckCircle} from "react-icons/md";
export default function UI({phanloai}){
    return (
    <Fragment>        
        <Button
        colorScheme="#276749"
        fontSize={"large"}
        fontWeight={100}
        color={"black"}
        bg={"white"}
        w ={280}
        href={"#"}
        margin={0}
        _hover={{
          bg: "#b8ddd1",
        }} 
        >
         {phanloai.loai}
        </Button>
    </Fragment> 
    )
}
