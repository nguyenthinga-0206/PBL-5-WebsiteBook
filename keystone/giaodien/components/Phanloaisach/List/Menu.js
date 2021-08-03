import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text, List, ListItem, Box } from "@chakra-ui/layout";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function PhanloaisachListMenu({ data, clickPhanLoai, value }) {
  const { allPhanloaisaches } = data;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="sm">
        Danh mục sách
      </MenuButton>
      <MenuList>
        {allPhanloaisaches.map((phanloai, index) => {
          return (
            <MenuItem onClick={(e) => clickPhanLoai(phanloai)}>
              {phanloai.loai}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
