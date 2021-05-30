
import {Text, List, ListItem, Box } from "@chakra-ui/layout";
import PhanloaiItem from "../Item";

export default function UI({ data, clickPhanLoai, value}) {
  const { allPhanloaisaches } = data;

  return (
    <List spacing={3}>
      {allPhanloaisaches.map((phanloai) => {
        return (
          <ListItem onClick={(e) => clickPhanLoai(phanloai)}>
            <PhanloaiItem key={phanloai.id} phanloai={phanloai} />
            <Text > {value}</Text>
          </ListItem>
        );
      })}
    </List>
  );
}