import { Button } from "@chakra-ui/button";
import { ListIcon, ListItem } from "@chakra-ui/layout";
import { Fragment } from "react";
import { MdCheckCircle } from "react-icons/md";

export default function UI({ phanloai }) {
  return (
    <Fragment>
      <Button size="sm" href={"#"} w="full">
        {phanloai.loai}
      </Button>
    </Fragment>
  );
}
