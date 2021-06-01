import {
    Input
} from "@chakra-ui/react";

export default function UITiemKiem(){
    return(
        <Input
          ml={10}
          mg = {200}
          md=  {200}
          mr ="20px"
          w={"50%"} 
          bg ="white"
          placeholder="Tìm kiếm"
        />
    );
}