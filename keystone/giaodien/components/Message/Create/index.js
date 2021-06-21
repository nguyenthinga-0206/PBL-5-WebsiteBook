import React from "react";
import { useChat } from "../../../Chat";

export default function MessageCreate({ UI, send, maxH }) {
  /**
   * @param {Event} e
   */
  function submitCreate(e) {
    e.preventDefault();
    var text = e.target["content"].value;
    send({ text });
    e.target["content"].value = "";
  }
  return <UI submitCreate={submitCreate} maxH />;
}
