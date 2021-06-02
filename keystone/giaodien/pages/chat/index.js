import { useState } from "react";
import { io } from "socket.io-client";

export default function chat() {
  const socket = io("http://192.168.43.146:8080");

  return (
    <div>
      <form
         
       
    
        onSubmit={(e) => {
          e.preventDefault(); // chan tai trang
          const value = e.target.message.value;
          console.log(value);
        }}
      >
        <input name="message" id="input" />
        <button type="submit">send</button>
        
      </form>
    </div>
  );
}
