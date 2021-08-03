import { Text, List, ListItem, Box } from "@chakra-ui/layout";
import PhanloaiItem from "../Item";
import PhanloaiItemUI from "../Item/UI";

export default function UI({ data, clickPhanLoai, value }) {
  const { allPhanloaisaches } = data;

  return (
    <List spacing={3}>
      {allPhanloaisaches.map((phanloai, index) => {
        return (
          <Box onClick={(e) => clickPhanLoai(phanloai)} key={index}>
            <PhanloaiItem
              UI={PhanloaiItemUI}
              key={phanloai.id}
              phanloai={phanloai}
            />
            <Text> {value}</Text>
          </Box>
        );
      })}
    </List>
  );
}
