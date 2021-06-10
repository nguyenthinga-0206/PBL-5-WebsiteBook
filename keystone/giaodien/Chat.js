import { io } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
export const ChatContext = createContext();
export const useRoom = (id, key) => {
  const context = useContext(ChatContext);
  const { join, hanled } = context;
  const [socket, setSocket] = useState();
  const [messages, setMessages] = useState([]);

  /**
   *
   */
  useEffect(() => {
    const url = `http://localhost:3000/rooms/${socket?.room}`;
    if (socket?.room)
      axios
        .get(url)
        .then((res) => setMessages(res?.data?.room || []))
        .finally(() => {});
  });
  useEffect(() => {
    const local = localStorage.getItem("room");
    var room = id ? id : local || createRoom();
    const _socket = join(room);
    if (!hanled(_socket?.room)) {
      _socket?.io.on(_socket.room, (message) => {
        setMessages([...messages, message]);
      });
    }
    //
    if (_socket.room !== socket?.room) setSocket(_socket);
  });

  function create(message) {
    const local = localStorage.getItem("room");
    socket?.io.emit(socket.room, { ...message, local });
  }
  return { room: socket?.room, messages, create, loading: !socket };
};
export function ChatProvider({ children }) {
  const [sockets, setSockets] = useState([]);
  function hanled(room) {
    const socket = sockets.find((_socket) => _socket.room === room);
    if (socket?.hanled) {
      return true;
    } else {
      setSockets((sockets) => {
        sockets.map((_socket) => {
          if (_socket.room === room) {
            _socket.hanled = true;
          }
        });
        return sockets;
      });
      return false;
    }
  }
  function join(room) {
    var existing = false;
    var socket = sockets.find((_socket) => {
      if (_socket.room === room) {
        existing = true;
        return true;
      }
    }) || {
      io: io("ws://localhost:3030", { query: { room } }),
      room,
    };
    if (!existing)
      setSockets((sockets) => {
        sockets.push(socket);
        return sockets;
      });
    return socket;
  }

  return (
    <ChatContext.Provider value={{ join, hanled }}>
      {children}
    </ChatContext.Provider>
  );
}

function createRoom() {
  const room = uuid();
  localStorage.setItem("room", room);
  return room;
}
function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const fetcher = (url) => axios.get(url).then((res) => res.data);
export const useRooms = () => useSWR("http://localhost:8080/rooms", fetcher);
