import { useRoom } from "../../../Chat";

export default function RoomItem({ UI, id }) {
  const { loading, room, messages, create } = useRoom(id);
  if (loading) return <pre>RoomItem loading...</pre>;
  return <UI room={room} messages={messages} create={create} />;
}
