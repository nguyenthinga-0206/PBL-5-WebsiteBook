import {
    Input,
    Link,
    Tooltip,
    chakra,
    Icon,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

export default function(){
    return(
        <Link           
             onClick={(e) => {
               
              }}
            >
              <Tooltip
                label="Thêm vào giỏ"
                bg="white"
                placement={"top"}
                color={"gray.800"}
                fontSize={"1.2em"}
              >
              <chakra.a href={"#"} display={"flex"}>
                <Icon
                  as={FiShoppingCart}
                  h={7}
                  w={7}
                  color={"#22543D"}
                  alignSelf={"center"}
                />
              </chakra.a>
            </Tooltip>
        </Link>
    );
}