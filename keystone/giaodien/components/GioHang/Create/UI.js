import HTML from "../../HTML";

export default function UI({CartItems, onCreate, resultCreateCart }) {
  return (
    <div>
      <button onClick={onCreate}>Tăng</button>
      
    </div>
  );
}
