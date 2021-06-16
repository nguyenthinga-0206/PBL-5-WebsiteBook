import React from "react";
import { useRoom } from "../../../Chat";

export default function RoomItem({ UI, id }) {
  const { room, messages, send } = useRoom(id);
  return <UI messages={messages} send={send} />;
}
