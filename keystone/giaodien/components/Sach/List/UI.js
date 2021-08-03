import { SimpleGrid } from "@chakra-ui/react";
import SachItem from "../Item";
import SachItemUI from "../Item/UI";
export default function UI({ data }) {
  const { allSaches } = data;
  return (
    <SimpleGrid columns={3} gap={2}>
      {allSaches.map((sach) => {
        return <SachItem UI={SachItemUI} key={sach.id} sach={sach} />;
      })}
    </SimpleGrid>
  );
}
