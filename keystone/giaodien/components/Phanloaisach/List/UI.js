import { List, ListItem } from "@chakra-ui/layout";
import PhanloaiItem from "../Item";

export default function UI({ data, clickPhanLoai }) {
  const { allPhanloaisaches } = data;

  return (
    <List spacing={3}>
      {allPhanloaisaches.map((phanloai) => {
        return (
          <ListItem onClick={(e) => clickPhanLoai(phanloai)}>
            <PhanloaiItem key={phanloai.id} phanloai={phanloai} />
          </ListItem>
        );
      })}
    </List>
  );
}