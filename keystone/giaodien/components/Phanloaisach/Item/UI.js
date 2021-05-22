import { ListIcon, ListItem } from "@chakra-ui/layout";
import { Fragment } from "react";
import {MdCheckCircle} from "react-icons/md";
export default function UI({phanloai}){
    return <Fragment>
    <ListIcon as={MdCheckCircle} color="green.500" />
    {phanloai.loai}
    </Fragment> 
}
