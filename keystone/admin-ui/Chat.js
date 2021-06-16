import {
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatProvider, useRooms } from "../giaodien/Chat";
import RoomItem from "../giaodien/components/Room/Item";
import RoomItemUI from "../giaodien/components/Room/Item/UI.admin";
export default function Chat() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}
function Main() {
  const { data = {}, error } = useRooms();
  const { rooms = [] } = data;
  const [current, setCurrent] = useState();
  return (
    <Container p={4} maxW={"full"}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          {rooms?.map((room) => {
            return (
              <h5
                key={room}
                onClick={(e) => {
                  setCurrent(room);
                }}
              >
                {room}
              </h5>
            );
          })}
        </GridItem>
        <GridItem colSpan={10}>
          {current && <RoomItem UI={RoomItemUI} id={current} />}
        </GridItem>
      </Grid>
    </Container>
  );
}
