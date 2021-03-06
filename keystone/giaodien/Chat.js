import React from "react";
import { io } from "socket.io-client";
import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { useShortcut } from "@chakra-ui/react";
export const ChatContext = createContext();
export const useRoom = (id, key) => {
  // const context = useContext(ChatContext);
  // const { join, on } = context;
  // const [messages, setMessages] = useState([]);
  // const [room, setRoom] = useState(id);

  // /**
  //  *
  //  */

  // useEffect(() => {
  //   const url = `https://hayaku.itoa.vn/rooms/${room}`;
  //   if (room)
  //     axios
  //       .get(url)
  //       .then((res) => setMessages(res?.data?.room || []))
  //       .finally(() => {});
  // }, [room]);
  // on(room, (message) => {
  //   if (!message.length || messages[0].room === message.room)
  //     setMessages([...messages, message]);
  // });
  // function create(message) {
  //   const _socket = join(room);
  //   _socket?.io.emit(room, { ...message, room });
  // }
  /**
   *
   */
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState();
  const [room, setRoom] = useState(id);
  const [local, setLocal] = useState(id);
  useEffect(() => {
    const _local = localStorage.getItem("room") || createRoom();
    const _room = id ? id : _local;
    setLocal(_local);
    setRoom(_room);
  });
  useEffect(() => {
    if (room) {
      const url = `https://hayaku.itoa.vn/rooms/${room}`;
      axios
        .get(url)
        .then((res) => setMessages(res?.data?.room || []))
        .finally(() => {});
      const _socket = io("https://socket.itoa.vn", {
        query: { room: room },
      });
      _socket?.on(room, (message) => {
        console.log("on", room);
        return setMessages((messages) => [...messages, message]);
      });
      setSocket(_socket);
      return () => {
        _socket?.off(room);
      };
    }
  }, [room]);

  function send(message) {
    if (message.text) socket?.emit(room, { ...message, room: local });
  }
  return {
    messages: messages.map((message) => ({
      ...message,
      isMe: message.room === local,
    })),
    send,
  };
};

function createRoom() {
  const room = uuid();
  localStorage.setItem("room", room);
  return room;
}
function uuid() {
  const items = [
    "M??o",
    "C??n",
    "S??u",
    "Th???",
    "Nh??m",
    "V???t",
    "Ngh??",
    "B??ng",
    "S??c",
    "???n",
    "T??m",
    "T??p",
    "H???n",
    "S???a",
    "Voi",
    "G???u",
    "H???",
    "Chu???t",
    "R??a",
    "C??o",
    "C???i",
    "Xo??i",
    "Khoai",
    "lang",
    "M??t",
    "C?? r???t",
    "Susu",
    "Na",
    "N???m",
    "Ng??",
    "?????u",
    "B?????i",
    "T??o",
    "Cam",
    "M???n",
    "D???a",
    "B?? ng??",
    "Su h??o",
    "??u ?????",
    "B??",
    "M??ng",
    "C??i",
    "S??n",
    "H??p",
    "B??",
    "Xo??n",
    "S???t",
    "X??",
    "D??",
    "M???p",
    "Ph??nh",
  ];
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
  // return Math.floor(Math.random() * 100000).toString();
}
const fetcher = (url) => axios.get(url).then((res) => res.data);
export const useRooms = () => useSWR("https://hayaku.itoa.vn/rooms", fetcher);
