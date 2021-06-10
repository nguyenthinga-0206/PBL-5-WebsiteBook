import { useChat } from "../../../Chat";

export default function MessageCreate({ UI, create }) {
  /**
   * @param {Event} e
   */
  function submitCreate(e) {
    e.preventDefault();
    var text = e.target["content"].value;
    create({ text });
    e.target["content"].value = "";
  }
  return <UI submitCreate={submitCreate} />;
}
